import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

type UserBucket = { windowIndex: number; count: number };

/**
 * Limita llamadas a OpenRouter para alinearse con cuotas típicas de modelos gratuitos
 * (~20 req/min por clave) y repartir carga entre usuarios.
 * Los límites son por proceso (memoria); en varias réplicas, cada instancia tiene su contador.
 */
@Injectable()
export class OpenRouterRateLimitService {
  private readonly userBuckets = new Map<number, UserBucket>();
  private globalDayKey = '';
  private globalDayCount = 0;

  private getThrottleTtlMs(): number {
    const n = Number.parseInt(process.env.AI_THROTTLE_TTL_MS ?? '60000', 10);
    return Number.isFinite(n) && n >= 1000 ? n : 60_000;
  }

  private getThrottleLimitPerWindow(): number {
    const n = Number.parseInt(process.env.AI_THROTTLE_LIMIT ?? '15', 10);
    return Number.isFinite(n) && n >= 1 ? n : 15;
  }

  private getGlobalDailyMax(): number {
    const n = Number.parseInt(
      process.env.OPENROUTER_GLOBAL_DAILY_MAX ?? '180',
      10,
    );
    return Number.isFinite(n) && n >= 1 ? n : 180;
  }

  private utcYmd(): string {
    return new Date().toISOString().slice(0, 10);
  }

  /**
   * Debe llamarse justo antes de cada petición HTTP a OpenRouter (por usuario autenticado).
   */
  assertAllowed(userId: number): void {
    const ymd = this.utcYmd();
    if (this.globalDayKey !== ymd) {
      this.globalDayKey = ymd;
      this.globalDayCount = 0;
    }
    const dailyMax = this.getGlobalDailyMax();
    if (this.globalDayCount >= dailyMax) {
      throw new HttpException(
        {
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          message:
            'Se alcanzó el límite diario de solicitudes a OpenRouter para este servidor. Inténtalo mañana o ajusta OPENROUTER_GLOBAL_DAILY_MAX si tu cuota lo permite.',
          error: 'AI_RATE_LIMIT_GLOBAL_DAILY',
          retryAfterSeconds: 86400,
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    const ttl = this.getThrottleTtlMs();
    const maxPerWindow = this.getThrottleLimitPerWindow();
    const now = Date.now();
    const windowIndex = Math.floor(now / ttl);

    const prev = this.userBuckets.get(userId);
    const base =
      prev && prev.windowIndex === windowIndex ? prev.count : 0;
    const nextCount = base + 1;
    if (nextCount > maxPerWindow) {
      const retryAfterSec = Math.ceil(ttl / 1000);
      throw new HttpException(
        {
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          message: `Demasiadas solicitudes de IA. Espera unos segundos (límite: ${maxPerWindow} cada ${retryAfterSec}s por usuario).`,
          error: 'AI_RATE_LIMIT_USER',
          retryAfterSeconds: retryAfterSec,
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    this.userBuckets.set(userId, { windowIndex, count: nextCount });
    this.globalDayCount += 1;
  }
}
