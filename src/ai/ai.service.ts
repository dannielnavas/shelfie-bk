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
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    const count = await this.prisma.aIRecommendation.count({
      where: {
        userId,
        queriedAt: { gte: startOfMonth },
      },
    });
    if (count >= monthlyAiLimit) {
      throw new ForbiddenException(
        `You have reached the limit of ${monthlyAiLimit} AI queries this month. Upgrade to Premium for more.`,
      );
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
