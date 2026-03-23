import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { OpenRouterRateLimitService } from './openrouter-rate-limit.service';
import type { RequestUser } from '../common/decorators/current-user.decorator';

@Injectable()
export class OpenRouterRateLimitGuard implements CanActivate {
  constructor(private readonly limiter: OpenRouterRateLimitService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<{ user?: RequestUser }>();
    const userId = req.user?.userId;
    if (userId == null) {
      return true;
    }
    this.limiter.assertAllowed(userId);
    return true;
  }
}
