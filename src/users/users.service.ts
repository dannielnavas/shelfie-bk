import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

const XP_PER_LEVEL = 100;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      include: { plan: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const { passwordHash: _, ...safe } = user;
    return safe;
  }

  async update(userId: number, dto: UpdateUserDto) {
    await this.findById(userId);
    return this.prisma.user.update({
      where: { userId },
      data: dto,
      select: {
        userId: true,
        name: true,
        email: true,
        planId: true,
        xpPoints: true,
        level: true,
        readingStreakDays: true,
        lastReadAt: true,
      },
    });
  }

  /** Calculates level from XP (1 level = 100 XP base). */
  static xpToLevel(xpPoints: number): number {
    if (xpPoints <= 0) return 1;
    return Math.floor(xpPoints / XP_PER_LEVEL) + 1;
  }

  /** Adds XP to user and updates level if applicable. */
  async addXp(
    userId: number,
    xpEarned: number,
  ): Promise<{ levelUp: boolean; newLevel: number }> {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      select: { xpPoints: true, level: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const newPoints = user.xpPoints + xpEarned;
    const newLevel = UsersService.xpToLevel(newPoints);
    const levelUp = newLevel > user.level;
    await this.prisma.user.update({
      where: { userId },
      data: { xpPoints: newPoints, level: newLevel },
    });
    return { levelUp, newLevel };
  }

  /** Updates reading streak based on last read date. */
  async updateStreak(userId: number, lastReadAt: Date): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      select: { lastReadAt: true, readingStreakDays: true },
    });
    if (!user) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const last = user.lastReadAt ? new Date(user.lastReadAt) : null;
    last?.setHours(0, 0, 0, 0);
    let streak = user.readingStreakDays;
    if (!last) {
      streak = 1;
    } else if (last.getTime() === yesterday.getTime()) {
      streak += 1;
    } else if (last.getTime() < yesterday.getTime()) {
      streak = 1;
    }
    await this.prisma.user.update({
      where: { userId },
      data: { readingStreakDays: streak, lastReadAt },
    });
  }
}
