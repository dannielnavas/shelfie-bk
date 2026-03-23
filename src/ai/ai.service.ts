import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecommendationDto } from './dto/create-recomendacion.dto';
import { OpenRouterService } from './openrouter.service';
import { RecommendBooksDto } from './dto/recommend-books.dto';
import { BookSummaryDto } from './dto/book-summary.dto';
import { SimilarBooksDto } from './dto/similar-books.dto';
import { ReadingPlanDto } from './dto/reading-plan.dto';
import { AskBookDto } from './dto/ask-book.dto';

@Injectable()
export class AiService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly openRouter: OpenRouterService,
  ) {}

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
        message: 'La IA no devolvió JSON válido. Prueba de nuevo o cambia de modelo.',
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
    const genres = dto.genres?.length ? dto.genres.join(', ') : '(no especificados)';
    const prefs = dto.preferences?.trim() || '(ninguna extra)';

    const system = `Eres un asistente de lectura en español. Devuelve SOLO un JSON con esta forma exacta:
{"recommendations":[{"title":"string","author":"string","reason":"string","estimatedGenre":"string"}],"readingTip":"string opcional"}
Las recomendaciones deben ser libros reales conocidos. No repitas títulos que ya estén en la biblioteca del usuario. Máximo ${limit} ítems en recommendations.`;

    const userMsg = `Biblioteca del usuario (JSON): ${librarySummary}
Géneros deseados: ${genres}
Preferencias del usuario: ${prefs}
Cantidad solicitada: ${limit}`;

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model },
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

    const system = `Eres un crítico literario conciso en español. Devuelve SOLO JSON con forma:
{"summary":"string (2-4 frases)","themes":["string"],"audience":"string","contentWarnings":"string o null"}`;

    const userMsg = `Título: ${dto.title}
Autor: ${dto.author ?? '(desconocido)'}
Sinopsis o notas: ${dto.description ?? '(no proporcionada)'}`;

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model },
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

    const system = `Eres un bibliotecario en español. Devuelve SOLO JSON:
{"similar":[{"title":"string","author":"string","whySimilar":"string"}],"seriesNote":"string o null si no aplica"}
Incluye hasta ${limit} libros reales.`;

    const userMsg = `Libro de referencia — Título: ${dto.title}, Autor: ${dto.author ?? '(desconocido)'}`;

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model },
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

  /** Plan de lectura sugerido (calendario simple o checklist). */
  async readingPlan(userId: number, dto: ReadingPlanDto) {
    await this.ensureMonthlyAiAllowed(userId);
    const model = this.openRouter.getDefaultModel();

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

    const system = `Eres un coach de hábitos de lectura en español. Devuelve SOLO JSON:
{"planTitle":"string","days":[{"label":"string","suggestion":"string"}],"totalEstimatedDays":"number o null","notes":"string" }
Adapta el plan al ritmo del usuario. Si faltan datos (páginas totales), estima con prudencia y dilo en notes.`;

    const userMsg = `Libro: ${title}
Autor: ${author ?? '(desconocido)'}
Páginas totales: ${totalPages ?? '(desconocidas)'}
Lleva leídas: ${pagesRead}
Objetivo diario (minutos o páginas, según contexto): ${dto.targetPerDay ?? '(no especificado)'}
Restricciones: ${dto.constraints ?? '(ninguna)'}`;

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model },
    );

    const parsed = this.parseJsonObject(raw);
    await this.incrementMonthlyAiUsage(userId);
    const row = await this.persistRecommendation(
      userId,
      `[readingPlan] ${userMsg.slice(0, 1500)}`,
      parsed,
      model,
    );
    return { ...parsed, recommendationId: row.recommendationId, model };
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

    const system = `Eres un asistente literario en español. Responde con rigor moderado: si no hay datos suficientes, dilo. Devuelve SOLO JSON:
{"answer":"string","caveats":"string o null","suggestedFollowUps":["string"]}`;

    const userMsg = `Contexto del libro:\n${block || '(sin contexto estructurado)'}\n\nPregunta:\n${dto.question}`;

    const raw = await this.openRouter.chatCompletion(
      [
        { role: 'system', content: system },
        { role: 'user', content: userMsg },
      ],
      { responseFormatJson: true, model },
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
