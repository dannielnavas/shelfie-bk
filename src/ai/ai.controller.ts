import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { CreateRecommendationDto } from './dto/create-recomendacion.dto';
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
}
