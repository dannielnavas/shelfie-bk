import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Carga prompts desde la tabla `ai_prompts`. No hay valores por defecto en código:
 * deben existir en BD (seed o migración de datos).
 */
@Injectable()
export class AiPromptService {
  constructor(private readonly prisma: PrismaService) {}

  async getRequired(promptKey: string): Promise<string> {
    const row = await this.prisma.aiPrompt.findUnique({
      where: { promptKey },
    });
    const content = row?.content?.trim();
    if (!content) {
      throw new ServiceUnavailableException({
        statusCode: 503,
        message: `Falta el prompt de IA en base de datos (clave: "${promptKey}"). Ejecuta el seed o inserta la fila en ai_prompts.`,
        error: 'AI_PROMPT_MISSING',
        promptKey,
      });
    }
    return content;
  }

  /** Sustituye {{clave}} por valores; claves ausentes se reemplazan por cadena vacía. */
  interpolate(template: string, vars: Record<string, string | number>): string {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
      const v = vars[key];
      return v !== undefined && v !== null ? String(v) : '';
    });
  }
}
