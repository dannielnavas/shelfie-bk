import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { CreateRecommendationDto } from './dto/create-recomendacion.dto';
import { RecommendBooksDto } from './dto/recommend-books.dto';
import { BookSummaryDto } from './dto/book-summary.dto';
import { SimilarBooksDto } from './dto/similar-books.dto';
import { ReadingPlanDto } from './dto/reading-plan.dto';
import { AskBookDto } from './dto/ask-book.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('ai')
@UseGuards(JwtAuthGuard)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('recommendations')
  saveRecommendation(
    @CurrentUser('userId') userId: number,
    @Body() dto: CreateRecommendationDto,
  ) {
    return this.aiService.saveRecommendation(userId, dto);
  }

  @Post('books/recommendations')
  recommendBooks(
    @CurrentUser('userId') userId: number,
    @Body() dto: RecommendBooksDto,
  ) {
    return this.aiService.recommendBooks(userId, dto);
  }

  @Post('books/summary')
  summarizeBook(
    @CurrentUser('userId') userId: number,
    @Body() dto: BookSummaryDto,
  ) {
    return this.aiService.summarizeBook(userId, dto);
  }

  @Post('books/similar')
  similarBooks(
    @CurrentUser('userId') userId: number,
    @Body() dto: SimilarBooksDto,
  ) {
    return this.aiService.similarBooks(userId, dto);
  }

  @Post('books/reading-plan')
  readingPlan(
    @CurrentUser('userId') userId: number,
    @Body() dto: ReadingPlanDto,
  ) {
    return this.aiService.readingPlan(userId, dto);
  }

  @Post('books/ask')
  askAboutBook(
    @CurrentUser('userId') userId: number,
    @Body() dto: AskBookDto,
  ) {
    return this.aiService.askAboutBook(userId, dto);
  }
}
