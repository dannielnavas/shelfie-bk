import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CreateBookDto } from './dto/create-libro.dto';
import { UpdateBookDto } from './dto/update-libro.dto';
import { ReadingStatus } from '@prisma/client';

const XP_PER_PAGE = 1;

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  private async checkBookLimit(userId: number): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      include: { plan: true },
    });
    if (!user?.plan) return;
    const { bookLimit } = user.plan;
    if (bookLimit == null) return; // unlimited
    const count = await this.prisma.book.count({ where: { userId } });
    if (count >= bookLimit) {
      throw new ForbiddenException(
        `You have reached the limit of ${bookLimit} books for your plan. Upgrade to Premium for more.`,
      );
    }
  }

  async create(userId: number, dto: CreateBookDto) {
    await this.checkBookLimit(userId);
    return this.prisma.book.create({
      data: {
        userId,
        isbn: dto.isbn,
        title: dto.title,
        author: dto.author,
        description: dto.description,
        imageUrl: dto.imageUrl,
        genre: dto.genre,
        totalPages: dto.totalPages,
        isOwned: dto.isOwned ?? true,
        readingStatus: dto.readingStatus ?? ReadingStatus.pending,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.book.findMany({
      where: { userId },
      orderBy: { addedAt: 'desc' },
    });
  }

  async findOne(userId: number, bookId: number) {
    const book = await this.prisma.book.findFirst({
      where: { bookId, userId },
    });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async update(userId: number, bookId: number, dto: UpdateBookDto) {
    await this.findOne(userId, bookId);
    const data: Record<string, unknown> = { ...dto };
    if (dto.borrowedAt !== undefined) {
      data.borrowedAt = dto.borrowedAt ? new Date(dto.borrowedAt) : null;
    }
    return this.prisma.book.update({
      where: { bookId },
      data,
    });
  }

  async remove(userId: number, bookId: number) {
    await this.findOne(userId, bookId);
    await this.prisma.book.delete({ where: { bookId } });
    return { message: 'Book deleted' };
  }

  /** Updates pages read, grants XP and updates streak/level if applicable. */
  async updatePagesRead(userId: number, bookId: number, pagesRead: number) {
    const book = await this.findOne(userId, bookId);
    if (book.totalPages != null && pagesRead > book.totalPages) {
      throw new BadRequestException(
        'Pages read cannot exceed total pages of the book',
      );
    }
    const delta = pagesRead - book.pagesRead;
    const xpEarned = Math.max(0, delta) * XP_PER_PAGE;

    const [updated, xpResult] = await Promise.all([
      this.prisma.book.update({
        where: { bookId },
        data: {
          pagesRead,
          readingStatus:
            pagesRead >= (book.totalPages ?? 0) && book.totalPages
              ? ReadingStatus.read
              : pagesRead > 0
                ? ReadingStatus.in_progress
                : ReadingStatus.pending,
        },
      }),
      xpEarned > 0
        ? this.usersService.addXp(userId, xpEarned)
        : this.prisma.user
            .findUnique({ where: { userId }, select: { level: true } })
            .then((u) => ({ levelUp: false, newLevel: u?.level ?? 1 })),
    ]);

    if (xpEarned > 0) {
      await this.usersService.updateStreak(userId, new Date());
    }

    return {
      book: updated,
      xpEarned,
      levelUp: xpResult.levelUp,
      newLevel: xpResult.newLevel,
    };
  }
}
