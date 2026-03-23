import {
  BadGatewayException,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { OpenRouterRateLimitService } from './openrouter-rate-limit.service';

type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

type OpenRouterCompletionResponse = {
  choices?: Array<{ message?: { content?: string | null } }>;
  error?: { message?: string };
};

@Injectable()
export class OpenRouterService {
  private readonly baseUrl = 'https://openrouter.ai/api/v1';

  constructor(private readonly rateLimiter: OpenRouterRateLimitService) {}

  private getApiKey(): string {
    const key = process.env.OPENROUTER_API_KEY?.trim();
    if (!key) {
      throw new ServiceUnavailableException({
        statusCode: 503,
        message:
          'IA no configurada: falta OPENROUTER_API_KEY. Consulta docs/api-ia-libros.md.',
        error: 'OPENROUTER_NOT_CONFIGURED',
      });
    }
    return key;
  }

  /** Solo `openrouter/free` o ids terminados en `:free` (variante gratuita de OpenRouter). */
  private assertFreeModelOnly(model: string): void {
    const m = model.trim();
    if (m === 'openrouter/free') return;
    if (m.endsWith(':free')) return;
    throw new BadRequestException({
      statusCode: 400,
      message:
        'Solo se permiten modelos gratuitos: usa "openrouter/free" (router) o un modelo con sufijo ":free" (ej. meta-llama/llama-3.2-3b-instruct:free).',
      error: 'OPENROUTER_MODEL_NOT_FREE',
    });
  }

  /** Modelo efectivo tras validar que sea variante gratuita. */
  resolveModel(override?: string): string {
    const model =
      (override ?? process.env.OPENROUTER_MODEL?.trim()) || 'openrouter/free';
    this.assertFreeModelOnly(model);
    return model;
  }

  getDefaultModel(): string {
    return this.resolveModel();
  }

  /**
   * Chat completions compatible con OpenRouter (mismo contrato que OpenAI).
   * @see https://openrouter.ai/docs/quickstart
   */
  async chatCompletion(
    messages: ChatMessage[],
    options?: {
      responseFormatJson?: boolean;
      model?: string;
      /** Si se indica, aplica el rate limit solo al llamar a OpenRouter (no en planes calculados en servidor). */
      rateLimitUserId?: number;
    },
  ): Promise<string> {
    if (options?.rateLimitUserId != null) {
      this.rateLimiter.assertAllowed(options.rateLimitUserId);
    }

    const body: Record<string, unknown> = {
      model: this.resolveModel(options?.model),
      messages,
    };
    if (options?.responseFormatJson) {
      body.response_format = { type: 'json_object' };
    }

    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.getApiKey()}`,
      'Content-Type': 'application/json',
    };
    const referer = process.env.OPENROUTER_HTTP_REFERER?.trim();
    const title = process.env.OPENROUTER_TITLE?.trim();
    if (referer) headers['HTTP-Referer'] = referer;
    if (title) headers['X-OpenRouter-Title'] = title;

    const res = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    const raw = await res.text();
    let data: OpenRouterCompletionResponse;
    try {
      data = JSON.parse(raw) as OpenRouterCompletionResponse;
    } catch {
      throw new BadGatewayException({
        statusCode: 502,
        message: 'Respuesta inválida del proveedor de IA',
        error: 'OPENROUTER_INVALID_RESPONSE',
      });
    }

    if (res.status === 429) {
      const msg = data.error?.message || 'Rate limit de OpenRouter';
      throw new HttpException(
        {
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          message: `OpenRouter (modelos gratuitos): ${msg}. Espera un momento o reduce la frecuencia de llamadas.`,
          error: 'OPENROUTER_RATE_LIMIT',
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    if (!res.ok) {
      const msg =
        data.error?.message ||
        (raw.length > 200 ? `${raw.slice(0, 200)}…` : raw);
      throw new BadGatewayException({
        statusCode: 502,
        message: `OpenRouter: ${msg}`,
        error: 'OPENROUTER_REQUEST_FAILED',
      });
    }

    const content = data.choices?.[0]?.message?.content;
    if (content == null || content === '') {
      throw new BadGatewayException({
        statusCode: 502,
        message: 'El proveedor de IA devolvió contenido vacío',
        error: 'OPENROUTER_EMPTY_CONTENT',
      });
    }
    return content;
  }
}
