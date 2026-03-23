import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { OpenRouterService } from './openrouter.service';
import { OpenRouterRateLimitService } from './openrouter-rate-limit.service';
import { AiPromptService } from './ai-prompt.service';

@Module({
  controllers: [AiController],
  providers: [
    AiService,
    AiPromptService,
    OpenRouterRateLimitService,
    OpenRouterService,
  ],
  exports: [AiService, OpenRouterService],
})
export class AiModule {}
