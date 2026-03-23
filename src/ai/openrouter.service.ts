import {
  BadGatewayException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';

type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

type OpenRouterCompletionResponse = {
  choices?: Array<{ message?: { content?: string | null } }>;
  error?: { message?: string };
};

@Injectable()
export class OpenRouterService {
  private readonly baseUrl = 'https://openrouter.ai/api/v1';

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

  getDefaultModel(): string {
    return (
      process.env.OPENROUTER_MODEL?.trim() || 'openai/gpt-4o-mini'
    );
  }

  /**
   * Chat completions compatible con OpenRouter (mismo contrato que OpenAI).
   * @see https://openrouter.ai/docs/quickstart
   */
  async chatCompletion(
    messages: ChatMessage[],
    options?: { responseFormatJson?: boolean; model?: string },
  ): Promise<string> {
    const body: Record<string, unknown> = {
      model: options?.model ?? this.getDefaultModel(),
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
