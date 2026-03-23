import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecommendationDto } from './dto/create-recomendacion.dto';
import { AiPromptService } from './ai-prompt.service';
import { AiPromptKey } from './ai-prompt.keys';
import { OpenRouterService } from './openrouter.service';
import { RecommendBooksDto } from './dto/recommend-books.dto';
import { BookSummaryDto } from './dto/book-summary.dto';
import { SimilarBooksDto } from './dto/similar-books.dto';
import { ReadingPlanDto } from './dto/reading-plan.dto';
import { AskBookDto } from './dto/ask-book.dto';

@Injectable()
export class AiService {
  /** Heurística para convertir minutos/día → páginas/día cuando no hay medición real. */
  private static readonly READING_MINUTES_PER_PAGE = 2;

  constructor(
    private readonly prisma: PrismaService,
    private readonly openRouter: OpenRouterService,
    private readonly aiPrompts: AiPromptService,
  ) {}

  /**
   * Cálculo determinista: evita errores del modelo al repartir páginas o contar días.
   */
  private computeReadingPlanMetrics(
    totalPages: number | undefined,
    pagesReadRaw: number,
    targetPerDay: number | undefined,
    targetUnit: 'pages' | 'minutes' | undefined,
  ): {
    pagesRemaining: number | null;
    pagesPerDay: number | null;
    estimatedCalendarDays: number | null;
    pagesReadClamped: number;
  } {
    const pagesReadBase = Math.max(0, pagesReadRaw);
    if (totalPages == null || totalPages <= 0) {
      return {
        pagesRemaining: null,
        pagesPerDay: null,
        estimatedCalendarDays: null,
        pagesReadClamped: pagesReadBase,
      };
    }
    const pagesReadClamped = Math.min(pagesReadBase, totalPages);
    const remaining = totalPages - pagesReadClamped;
    if (remaining <= 0) {
      return {
        pagesRemaining: 0,
        pagesPerDay: null,
        estimatedCalendarDays: 0,
        pagesReadClamped,
      };
    }
    if (targetPerDay == null || targetPerDay < 1) {
      return {
        pagesRemaining: remaining,
        pagesPerDay: null,
        estimatedCalendarDays: null,
        pagesReadClamped,
      };
    }
    const unit = targetUnit ?? 'pages';
    let pagesPerDay: number;
    if (unit === 'minutes') {
      pagesPerDay = Math.max(
        1,
        Math.floor(targetPerDay / AiService.READING_MINUTES_PER_PAGE),
      );
    } else {
      pagesPerDay = Math.max(1, targetPerDay);
    }
    const estimatedCalendarDays = Math.ceil(remaining / pagesPerDay);
    return {
      pagesRemaining: remaining,
      pagesPerDay,
      estimatedCalendarDays,
      pagesReadClamped,
    };
  }

  private async buildReadingScheduleDays(
    totalPages: number,
    pagesReadStart: number,
    pagesPerDay: number,
  ): Promise<Array<{ label: string; suggestion: string }>> {
    const [labelTpl, singleTpl, rangeTpl] = await Promise.all([
      this.aiPrompts.getRequired(AiPromptKey.READING_PLAN_DAY_LABEL),
      this.aiPrompts.getRequired(
        AiPromptKey.READING_PLAN_DAY_SUGGESTION_SINGLE,
      ),
      this.aiPrompts.getRequired(AiPromptKey.READING_PLAN_DAY_SUGGESTION_RANGE),
    ]);

    const read = Math.min(Math.max(0, pagesReadStart), totalPages);
    let cursor = read;
    const days: Array<{ label: string; suggestion: string }> = [];
    let dayNum = 1;
    while (cursor < totalPages && dayNum <= 400) {
      const end = Math.min(cursor + pagesPerDay, totalPages);
      const chunk = end - cursor;
      const from = cursor + 1;
      const to = end;
      const suggestion =
        chunk === 1
          ? this.aiPrompts.interpolate(singleTpl, { from })
          : this.aiPrompts.interpolate(rangeTpl, { from, to, chunk });
      days.push({
        label: this.aiPrompts.interpolate(labelTpl, { dayNum }),
        suggestion,
      });
      cursor = end;
      dayNum += 1;
    }
    return days;
  }

  private async ensureMonthlyAiAllowed(userId: number): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      include: { plan: true },
    });
    if (!user?.plan) return;
    const { monthlyAiLimit } = user.plan;
    if (monthlyAiLimit == null) return;

    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;

    const usage = await this.prisma.monthlyAiUsage.findUnique({
      where: {
        userId_year_month: {
          userId,
          year,
          month,
        },
      },
    });

    if (usage && usage.count >= monthlyAiLimit) {
      throw new ForbiddenException({
        statusCode: 403,
        message:
          'Has alcanzado el límite mensual de IA de tu plan. Actualiza a Premium para seguir usando esta función.',
        error: 'PLAN_LIMIT_REACHED',
        limitType: 'ai',
      });
    }
  }

  private async incrementMonthlyAiUsage(userId: number): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      include: { plan: true },
    });
    if (!user?.plan) return;
    if (user.plan.monthlyAiLimit == null) return;

    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;

    const usage = await this.prisma.monthlyAiUsage.findUnique({
      where: {
        userId_year_month: {
          userId,
          year,
          month,
        },
      },
    });

    if (!usage) {
      await this.prisma.monthlyAiUsage.create({
        data: {
          userId,
          year,
          month,
          count: 1,
        },
      });
    } else {
      await this.prisma.monthlyAiUsage.update({
        where: {
          userId_year_month: {
            userId,
            year,
            month,
          },
        },
        data: {
          count: usage.count + 1,
        },
      });
    }
  }

  private async checkMonthlyAiLimit(userId: number): Promise<void> {
    await this.ensureMonthlyAiAllowed(userId);
    await this.incrementMonthlyAiUsage(userId);
  }

  private stripJsonFences(raw: string): string {
    const t = raw.trim();
    const m = t.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
    return m ? m[1].trim() : t;
  }

  private parseJsonObject(raw: string): Record<string, unknown> {
    const cleaned = this.stripJsonFences(raw);
    try {
      const val = JSON.parse(cleaned) as unknown;
      if (val === null || typeof val !== 'object' || Array.isArray(val)) {
        throw new Error('not an object');
      }
      return val as Record<string, unknown>;
    } catch {
      throw new BadRequestException({
        statusCode: 400,
        message:
          'La IA no devolvió JSON válido. Prueba de nuevo o cambia de modelo.',
        error: 'AI_INVALID_JSON',
      });
    }
  }

  private async persistRecommendation(
    userId: number,
    promptSent: string,
    aiResponseJson: Record<string, unknown>,
    aiModel: string,
  ) {
    return this.prisma.aIRecommendation.create({
      data: {
        userId,
        promptSent,
        aiResponseJson: aiResponseJson as Prisma.InputJsonValue,
        aiModel,
      },
    });
  }

  async saveRecommendation(userId: number, dto: CreateRecommendationDto) {
    await this.checkMonthlyAiLimit(userId);
    return this.prisma.aIRecommendation.create({
      data: {
        userId,
        promptSent: dto.promptSent,
        aiResponseJson: (dto.aiResponseJson ?? undefined) as object | undefined,
        aiModel: dto.aiModel,
      },
    });
  }

  /** Recomendaciones según la biblioteca del usuario y preferencias opcionales. */
  async recommendBooks(userId: number, dto: RecommendBooksDto) {
    await this.ensureMonthlyAiAllowed(userId);
    const model = this.openRouter.getDefaultModel();

    const books = await this.prisma.book.findMany({
      where: { userId },
      select: {
        title: true,
        author: true,
        genre: true,
        readingStatus: true,
        isOwned: true,
      },
      orderBy: { addedAt: 'desc' },
      take: 80,
    });

    const limit = dto.limit ?? 5;
    const librarySummary = JSON.stringify(books, null, 0);
    const genres = dto.genres?.length
      ? dto.genres.join(', ')
      : '(no especificados)';
    const prefs = dto.preferences?.trim() || '(ninguna extra)';

    const [systemTpl, userTpl] = await Promise.all([
      this.aiPrompts.getRequired(AiPromptKey.RECOMMEND_BOOKS_SYSTEM),
      this.aiPrompts.getRequired(AiPromptKey.RECOMMEND_BOOKS_USER),
    ]);
    const system = this.aiPrompts.interpolate(systemTpl, { limit });
    const userMsg = this.aiPrompts.interpolate(userTpl, {
      librarySummary,
      genres,
      prefs,
      limit,
    });

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model, rateLimitUserId: userId },
    );

    const parsed = this.parseJsonObject(raw);
    await this.incrementMonthlyAiUsage(userId);
    const row = await this.persistRecommendation(
      userId,
      `[recommendBooks] ${userMsg.slice(0, 1500)}`,
      parsed,
      model,
    );
    return { ...parsed, recommendationId: row.recommendationId, model };
  }

  /** Resumen breve y puntos clave a partir de metadatos (sin necesidad de tener el libro en BD). */
  async summarizeBook(userId: number, dto: BookSummaryDto) {
    await this.ensureMonthlyAiAllowed(userId);
    const model = this.openRouter.getDefaultModel();

    const [system, userTpl] = await Promise.all([
      this.aiPrompts.getRequired(AiPromptKey.SUMMARIZE_BOOK_SYSTEM),
      this.aiPrompts.getRequired(AiPromptKey.SUMMARIZE_BOOK_USER),
    ]);
    const userMsg = this.aiPrompts.interpolate(userTpl, {
      title: dto.title,
      author: dto.author ?? '(desconocido)',
      description: dto.description ?? '(no proporcionada)',
    });

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model, rateLimitUserId: userId },
    );

    const parsed = this.parseJsonObject(raw);
    await this.incrementMonthlyAiUsage(userId);
    const row = await this.persistRecommendation(
      userId,
      `[summarizeBook] ${userMsg.slice(0, 1500)}`,
      parsed,
      model,
    );
    return { ...parsed, recommendationId: row.recommendationId, model };
  }

  /** Libros parecidos por título/autor. */
  async similarBooks(userId: number, dto: SimilarBooksDto) {
    await this.ensureMonthlyAiAllowed(userId);
    const model = this.openRouter.getDefaultModel();
    const limit = dto.limit ?? 5;

    const [systemTpl, userTpl] = await Promise.all([
      this.aiPrompts.getRequired(AiPromptKey.SIMILAR_BOOKS_SYSTEM),
      this.aiPrompts.getRequired(AiPromptKey.SIMILAR_BOOKS_USER),
    ]);
    const system = this.aiPrompts.interpolate(systemTpl, { limit });
    const userMsg = this.aiPrompts.interpolate(userTpl, {
      title: dto.title,
      author: dto.author ?? '(desconocido)',
    });

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model, rateLimitUserId: userId },
    );

    const parsed = this.parseJsonObject(raw);
    await this.incrementMonthlyAiUsage(userId);
    const row = await this.persistRecommendation(
      userId,
      `[similarBooks] ${userMsg}`,
      parsed,
      model,
    );
    return { ...parsed, recommendationId: row.recommendationId, model };
  }

  /** Plan de lectura: reparto de páginas y días calculados en servidor cuando hay datos suficientes. */
  async readingPlan(userId: number, dto: ReadingPlanDto) {
    let title = dto.title;
    let author = dto.author;
    let totalPages = dto.totalPages;
    let pagesRead = dto.pagesRead ?? 0;

    if (dto.bookId != null) {
      const book = await this.prisma.book.findFirst({
        where: { bookId: dto.bookId, userId },
      });
      if (!book) {
        throw new NotFoundException('Libro no encontrado en tu biblioteca');
      }
      title = book.title;
      author = book.author ?? undefined;
      totalPages = book.totalPages ?? undefined;
      pagesRead = book.pagesRead;
    }

    if (!title?.trim()) {
      throw new BadRequestException(
        'Indica bookId o title para generar un plan de lectura',
      );
    }

    const metrics = this.computeReadingPlanMetrics(
      totalPages,
      pagesRead,
      dto.targetPerDay,
      dto.targetUnit,
    );

    const computed = {
      totalPages: totalPages ?? null,
      pagesRead: metrics.pagesReadClamped,
      pagesRemaining: metrics.pagesRemaining,
      pagesPerDay: metrics.pagesPerDay,
      targetPerDay: dto.targetPerDay ?? null,
      targetUnit: dto.targetUnit ?? 'pages',
      minutesPerPageAssumption:
        dto.targetUnit === 'minutes'
          ? AiService.READING_MINUTES_PER_PAGE
          : null,
      estimatedCalendarDays: metrics.estimatedCalendarDays,
    };

    const canComputeSchedule =
      totalPages != null &&
      totalPages > 0 &&
      metrics.pagesRemaining != null &&
      metrics.pagesRemaining > 0 &&
      metrics.pagesPerDay != null &&
      metrics.estimatedCalendarDays != null &&
      metrics.estimatedCalendarDays > 0;

    if (canComputeSchedule) {
      const tp = totalPages as number;
      const days = await this.buildReadingScheduleDays(
        tp,
        metrics.pagesReadClamped,
        metrics.pagesPerDay as number,
      );

      const [
        planTitleTpl,
        constraintsSuffixTpl,
        notesTplPages,
        notesTplMinutes,
      ] = await Promise.all([
        this.aiPrompts.getRequired(
          AiPromptKey.READING_PLAN_COMPUTED_PLAN_TITLE,
        ),
        this.aiPrompts.getRequired(
          AiPromptKey.READING_PLAN_COMPUTED_CONSTRAINTS_SUFFIX,
        ),
        this.aiPrompts.getRequired(
          AiPromptKey.READING_PLAN_COMPUTED_NOTES_PAGES,
        ),
        this.aiPrompts.getRequired(
          AiPromptKey.READING_PLAN_COMPUTED_NOTES_MINUTES,
        ),
      ]);

      const planTitle = this.aiPrompts.interpolate(planTitleTpl, { title });
      const constraintsSuffix = dto.constraints?.trim()
        ? this.aiPrompts.interpolate(constraintsSuffixTpl, {
            constraints: dto.constraints.trim(),
          })
        : '';
      const notesTpl =
        dto.targetUnit === 'minutes' ? notesTplMinutes : notesTplPages;
      const notes = this.aiPrompts.interpolate(notesTpl, {
        pagesPerDay: String(metrics.pagesPerDay),
        targetPerDay: String(dto.targetPerDay ?? ''),
        minutesPerPage: String(AiService.READING_MINUTES_PER_PAGE),
        constraintsSuffix,
      });

      const payload = {
        planTitle,
        days,
        totalEstimatedDays: days.length,
        notes,
        computed,
      };

      const row = await this.persistRecommendation(
        userId,
        `[readingPlan:computed] ${JSON.stringify({ title, ...computed }).slice(0, 1500)}`,
        payload as Record<string, unknown>,
        'server/calculated-reading-plan',
      );

      return {
        ...payload,
        recommendationId: row.recommendationId,
        model: 'server/calculated-reading-plan',
      };
    }

    if (metrics.pagesRemaining === 0 && totalPages != null && totalPages > 0) {
      const [planTitleTpl, doneNotes] = await Promise.all([
        this.aiPrompts.getRequired(AiPromptKey.READING_PLAN_DONE_PLAN_TITLE),
        this.aiPrompts.getRequired(AiPromptKey.READING_PLAN_DONE_NOTES),
      ]);
      const payload = {
        planTitle: this.aiPrompts.interpolate(planTitleTpl, { title }),
        days: [] as Array<{ label: string; suggestion: string }>,
        totalEstimatedDays: 0,
        notes: doneNotes,
        computed,
      };
      const row = await this.persistRecommendation(
        userId,
        `[readingPlan:computed:done] ${title}`,
        payload as Record<string, unknown>,
        'server/calculated-reading-plan',
      );
      return {
        ...payload,
        recommendationId: row.recommendationId,
        model: 'server/calculated-reading-plan',
      };
    }

    await this.ensureMonthlyAiAllowed(userId);
    const model = this.openRouter.getDefaultModel();

    const [system, userTpl] = await Promise.all([
      this.aiPrompts.getRequired(AiPromptKey.READING_PLAN_AI_SYSTEM),
      this.aiPrompts.getRequired(AiPromptKey.READING_PLAN_AI_USER),
    ]);
    const targetLine =
      dto.targetPerDay != null
        ? `${dto.targetPerDay} (${dto.targetUnit ?? 'pages'})`
        : '(no especificada — propón un ritmo razonable en notes)';
    const userMsg = this.aiPrompts.interpolate(userTpl, {
      title,
      author: author ?? '(desconocido)',
      totalPages:
        totalPages != null
          ? String(totalPages)
          : '(desconocidas — estima en notes)',
      pagesReadClamped: String(metrics.pagesReadClamped),
      pagesRemaining:
        metrics.pagesRemaining != null
          ? String(metrics.pagesRemaining)
          : '(desconocido)',
      targetLine,
      constraints: dto.constraints ?? '(ninguna)',
    });

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model, rateLimitUserId: userId },
    );

    const parsed = this.parseJsonObject(raw);
    await this.incrementMonthlyAiUsage(userId);
    const row = await this.persistRecommendation(
      userId,
      `[readingPlan] ${userMsg.slice(0, 1500)}`,
      { ...parsed, computed } as Record<string, unknown>,
      model,
    );
    return {
      ...parsed,
      computed,
      recommendationId: row.recommendationId,
      model,
    };
  }

  /** Preguntas sobre un libro (con contexto de la BD o texto libre). */
  async askAboutBook(userId: number, dto: AskBookDto) {
    await this.ensureMonthlyAiAllowed(userId);
    const model = this.openRouter.getDefaultModel();

    let block = dto.context?.trim() || '';
    if (dto.bookId != null) {
      const book = await this.prisma.book.findFirst({
        where: { bookId: dto.bookId, userId },
      });
      if (!book) {
        throw new NotFoundException('Libro no encontrado en tu biblioteca');
      }
      block = [
        `Título: ${book.title}`,
        `Autor: ${book.author ?? ''}`,
        `Género: ${book.genre ?? ''}`,
        `Estado: ${book.readingStatus}`,
        `Descripción: ${book.description ?? ''}`,
        dto.context?.trim() ? `Notas del usuario: ${dto.context.trim()}` : '',
      ]
        .filter(Boolean)
        .join('\n');
    }

    const [system, userTpl] = await Promise.all([
      this.aiPrompts.getRequired(AiPromptKey.ASK_BOOK_SYSTEM),
      this.aiPrompts.getRequired(AiPromptKey.ASK_BOOK_USER),
    ]);
    const userMsg = this.aiPrompts.interpolate(userTpl, {
      contextBlock: block || '(sin contexto estructurado)',
      question: dto.question,
    });

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model, rateLimitUserId: userId },
    );

    const parsed = this.parseJsonObject(raw);
    await this.incrementMonthlyAiUsage(userId);
    const row = await this.persistRecommendation(
      userId,
      `[askAboutBook] ${userMsg.slice(0, 1500)}`,
      parsed,
      model,
    );
    return { ...parsed, recommendationId: row.recommendationId, model };
  }
}
