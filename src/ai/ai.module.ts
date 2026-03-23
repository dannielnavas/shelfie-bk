import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { OpenRouterService } from './openrouter.service';
import { OpenRouterRateLimitService } from './openrouter-rate-limit.service';
import { OpenRouterRateLimitGuard } from './openrouter-rate-limit.guard';

@Module({
  controllers: [AiController],
  providers: [
    AiService,
    OpenRouterService,
    OpenRouterRateLimitService,
    OpenRouterRateLimitGuard,
  ],
  exports: [AiService, OpenRouterService],
})
export class AiModule {}
