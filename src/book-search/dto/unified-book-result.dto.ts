/**
 * Resultado unificado de búsqueda de libros desde cualquier fuente (Google Books, Open Library, etc.).
 * Compatible con CreateBookDto para que el usuario pueda completar/editar y registrar el libro.
 */
export type BookSearchSource = 'google_books' | 'open_library';

export interface UnifiedBookResult {
  /** Título del libro (requerido para registrar) */
  title: string;
  /** ISBN-10 o ISBN-13 si está disponible */
  isbn?: string;
  /** Autor(es) como texto */
  author?: string;
  /** Descripción o sinopsis */
  description?: string;
  /** URL de la portada */
  imageUrl?: string;
  /** Género o categoría */
  genre?: string;
  /** Número total de páginas si está disponible */
  totalPages?: number;
  /** Fuente de donde proviene el resultado */
  source: BookSearchSource;
  /** ID externo en la fuente (ej: volumeId de Google, key de Open Library) */
  externalId?: string;
}
