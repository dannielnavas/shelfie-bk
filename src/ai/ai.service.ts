import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecommendationDto } from './dto/create-recomendacion.dto';

@Injectable()
export class AiService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkMonthlyAiLimit(userId: number): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      include: { plan: true },
    });
    if (!user?.plan) return;
    const { monthlyAiLimit } = user.plan;
    if (monthlyAiLimit == null) return;

    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1; // 1-12

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
}
