/** Datos iniciales para `ai_prompts` — editables en BD. Placeholders: {{nombre}}. */

export type AiPromptSeedRow = {
  promptKey: string;
  content: string;
  description?: string;
};

export const aiPromptsSeed: AiPromptSeedRow[] = [
  {
    promptKey: 'recommend_books.system',
    description: 'System: recomendaciones según biblioteca',
    content: `Eres un asistente de lectura en español. Devuelve SOLO un JSON con esta forma exacta:
{"recommendations":[{"title":"string","author":"string","reason":"string","estimatedGenre":"string"}],"readingTip":"string opcional"}
Las recomendaciones deben ser libros reales conocidos. No repitas títulos que ya estén en la biblioteca del usuario. Máximo {{limit}} ítems en recommendations.`,
  },
  {
    promptKey: 'recommend_books.user',
    description: 'User: recomendaciones (variables librarySummary, genres, prefs, limit)',
    content: `Biblioteca del usuario (JSON): {{librarySummary}}
Géneros deseados: {{genres}}
Preferencias del usuario: {{prefs}}
Cantidad solicitada: {{limit}}`,
  },
  {
    promptKey: 'summarize_book.system',
    description: 'System: resumen de libro',
    content: `Eres un crítico literario conciso en español. Devuelve SOLO JSON con forma:
{"summary":"string (2-4 frases)","themes":["string"],"audience":"string","contentWarnings":"string o null"}`,
  },
  {
    promptKey: 'summarize_book.user',
    description: 'User: resumen (title, author, description)',
    content: `Título: {{title}}
Autor: {{author}}
Sinopsis o notas: {{description}}`,
  },
  {
    promptKey: 'similar_books.system',
    description: 'System: libros similares',
    content: `Eres un bibliotecario en español. Devuelve SOLO JSON:
{"similar":[{"title":"string","author":"string","whySimilar":"string"}],"seriesNote":"string o null si no aplica"}
Incluye hasta {{limit}} libros reales.`,
  },
  {
    promptKey: 'similar_books.user',
    description: 'User: similar (title, author)',
    content: `Libro de referencia — Título: {{title}}, Autor: {{author}}`,
  },
  {
    promptKey: 'reading_plan_ai.system',
    description: 'System: plan de lectura vía IA (sin cálculo servidor)',
    content: `Eres un coach de hábitos de lectura en español. Devuelve SOLO JSON válido con forma:
{"planTitle":"string","days":[{"label":"string","suggestion":"string"}],"totalEstimatedDays":number,"notes":"string"}
Reglas: totalEstimatedDays debe ser un entero (días naturales estimados). El array days debe tener a lo sumo totalEstimatedDays entradas. Si faltan páginas totales o una meta diaria clara, estima con prudencia y explica en notes.`,
  },
  {
    promptKey: 'reading_plan_ai.user',
    description:
      'User: plan IA (title, author, totalPages, pagesReadClamped, pagesRemaining, targetLine, constraints)',
    content: `Libro: {{title}}
Autor: {{author}}
Páginas totales: {{totalPages}}
Páginas leídas (ajustadas si hay total): {{pagesReadClamped}}
Páginas restantes (si se conoce el total): {{pagesRemaining}}
Meta diaria: {{targetLine}}
Restricciones: {{constraints}}`,
  },
  {
    promptKey: 'ask_book.system',
    description: 'System: preguntas sobre libro',
    content: `Eres un asistente literario en español. Responde con rigor moderado: si no hay datos suficientes, dilo. Devuelve SOLO JSON:
{"answer":"string","caveats":"string o null","suggestedFollowUps":["string"]}`,
  },
  {
    promptKey: 'ask_book.user',
    description: 'User: ask (contextBlock, question)',
    content: `Contexto del libro:
{{contextBlock}}

Pregunta:
{{question}}`,
  },
  {
    promptKey: 'reading_plan_computed.plan_title',
    description: 'Título plan calculado en servidor',
    content: `Plan de lectura: {{title}}`,
  },
  {
    promptKey: 'reading_plan_computed.notes_pages',
    description: 'Notas ritmo páginas/día (pagesPerDay, constraintsSuffix)',
    content: `Ritmo: ~{{pagesPerDay}} pág./día{{constraintsSuffix}}`,
  },
  {
    promptKey: 'reading_plan_computed.notes_minutes',
    description:
      'Notas ritmo desde min/día (pagesPerDay, targetPerDay, minutesPerPage, constraintsSuffix)',
    content: `Ritmo: ~{{pagesPerDay}} pág./día (desde {{targetPerDay}} min/día, ~{{minutesPerPage}} min/página).{{constraintsSuffix}}`,
  },
  {
    promptKey: 'reading_plan_computed.constraints_suffix',
    description: 'Sufijo si hay restricciones (constraints)',
    content: ` Restricciones: {{constraints}}`,
  },
  {
    promptKey: 'reading_plan_done.plan_title',
    description: 'Título cuando no quedan páginas',
    content: `Plan: {{title}}`,
  },
  {
    promptKey: 'reading_plan_done.notes',
    description: 'Mensaje libro ya completado',
    content: `No quedan páginas por leer según los datos del libro (progreso alcanza o supera el total).`,
  },
  {
    promptKey: 'reading_plan_day.label',
    description: 'Etiqueta de día (dayNum)',
    content: `Día {{dayNum}}`,
  },
  {
    promptKey: 'reading_plan_day.suggestion_single',
    description: 'Una página (from)',
    content: `Lee la página {{from}}.`,
  },
  {
    promptKey: 'reading_plan_day.suggestion_range',
    description: 'Rango de páginas (from, to, chunk)',
    content: `Lee las páginas {{from}}–{{to}} ({{chunk}} páginas).`,
  },
];
