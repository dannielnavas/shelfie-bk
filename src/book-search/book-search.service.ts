import { Injectable } from '@nestjs/common';
import type {
  UnifiedBookResult,
  BookSearchSource,
} from './dto/unified-book-result.dto';

const GOOGLE_BOOKS_BASE = 'https://www.googleapis.com/books/v1/volumes';
const OPEN_LIBRARY_SEARCH = 'https://openlibrary.org/search.json';
const OPEN_LIBRARY_COVER = 'https://covers.openlibrary.org/b';

/** Respuesta cruda de Google Books volumes.list */
interface GoogleVolumeItem {
  id: string;
  volumeInfo?: {
    title?: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
      small?: string;
      medium?: string;
    };
    industryIdentifiers?: Array<{ type?: string; identifier?: string }>;
    pageCount?: number;
    categories?: string[];
    mainCategory?: string;
  };
}

/** Respuesta cruda de Open Library search.json */
interface OpenLibraryDoc {
  key?: string;
  title?: string;
  author_name?: string[];
  cover_i?: number;
  isbn?: string[];
  number_of_pages_median?: number;
  subject?: string[];
  first_publish_year?: number;
}

@Injectable()
export class BookSearchService {
  /**
   * Busca libros en Google Books y Open Library y devuelve un formato unificado.
   * Puede buscar por título/autor (q) o por ISBN (isbn). El usuario puede completar/editar
   * los campos y usar el resultado para registrar un libro (POST /books).
   */
  async search(params: {
    q?: string;
    isbn?: string;
    limit?: number;
  }): Promise<UnifiedBookResult[]> {
    const { q, isbn, limit = 10 } = params;
    if (!q && !isbn) return [];

    const searchByIsbn = !!isbn;
    const query = searchByIsbn ? `isbn:${isbn}` : q!;

    const perSource = Math.ceil(limit / 2);
    const [googleResults, openLibraryResults] = await Promise.allSettled([
      this.searchGoogleBooks(query, perSource, searchByIsbn),
      this.searchOpenLibrary(query, perSource, searchByIsbn),
    ]);

    const results: UnifiedBookResult[] = [];

    if (googleResults.status === 'fulfilled') {
      results.push(...googleResults.value);
    }
    if (openLibraryResults.status === 'fulfilled') {
      results.push(...openLibraryResults.value);
    }

    return results.slice(0, limit);
  }

  private async searchGoogleBooks(
    query: string,
    maxResults: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _byIsbn: boolean,
  ): Promise<UnifiedBookResult[]> {
    const url = new URL(GOOGLE_BOOKS_BASE);
    url.searchParams.set('q', query);
    url.searchParams.set('maxResults', String(Math.min(maxResults, 40)));
    url.searchParams.set('printType', 'books');

    const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
    if (apiKey) {
      url.searchParams.set('key', apiKey);
    }

    const res = await fetch(url.toString());
    if (!res.ok) return [];

    const data = (await res.json()) as { items?: GoogleVolumeItem[] };
    const items = data.items ?? [];
    return items.map((item) => this.normalizeGoogleVolume(item));
  }

  private normalizeGoogleVolume(item: GoogleVolumeItem): UnifiedBookResult {
    const vi = item.volumeInfo ?? {};
    const title = vi.title ?? 'Sin título';
    const authors = vi.authors ?? [];
    const author = authors.length > 0 ? authors.join(', ') : undefined;
    let description = vi.description;
    if (typeof description === 'string') {
      description = description
        .replace(/<[^>]+>/g, '')
        .trim()
        .slice(0, 2000);
    }
    const imageLinks = vi.imageLinks ?? {};
    const imageUrl =
      imageLinks.thumbnail ??
      imageLinks.small ??
      imageLinks.medium ??
      undefined;
    let isbn: string | undefined;
    const ids = vi.industryIdentifiers ?? [];
    const isbn13 = ids.find((i) => i.type === 'ISBN_13');
    const isbn10 = ids.find((i) => i.type === 'ISBN_10');
    if (isbn13?.identifier) isbn = isbn13.identifier;
    else if (isbn10?.identifier) isbn = isbn10.identifier;
    const genre =
      vi.mainCategory ?? (vi.categories && vi.categories[0]) ?? undefined;
    const totalPages =
      typeof vi.pageCount === 'number' && vi.pageCount > 0
        ? vi.pageCount
        : undefined;

    return {
      title,
      isbn,
      author,
      description: description || undefined,
      imageUrl: imageUrl || undefined,
      genre: genre ? genre.slice(0, 50) : undefined,
      totalPages,
      source: 'google_books' as BookSearchSource,
      externalId: item.id,
    };
  }

  private async searchOpenLibrary(
    query: string,
    limit: number,
    byIsbn: boolean,
  ): Promise<UnifiedBookResult[]> {
    const url = new URL(OPEN_LIBRARY_SEARCH);
    // Open Library Search API solo tiene "q"; para ISBN usamos los dígitos en q
    const q = byIsbn && query.startsWith('isbn:') ? query.slice(5) : query;
    url.searchParams.set('q', q);
    url.searchParams.set('limit', String(Math.min(limit, 100)));

    const res = await fetch(url.toString());
    if (!res.ok) return [];

    const data = (await res.json()) as { docs?: OpenLibraryDoc[] };
    const docs = data.docs ?? [];
    return docs.map((doc) => this.normalizeOpenLibraryDoc(doc));
  }

  private normalizeOpenLibraryDoc(doc: OpenLibraryDoc): UnifiedBookResult {
    const title = doc.title ?? 'Sin título';
    const authorNames = doc.author_name ?? [];
    const author = authorNames.length > 0 ? authorNames.join(', ') : undefined;
    const imageUrl =
      typeof doc.cover_i === 'number'
        ? `${OPEN_LIBRARY_COVER}/id/${doc.cover_i}-M.jpg`
        : undefined;
    const isbn = Array.isArray(doc.isbn) ? doc.isbn[0] : undefined;
    const genre =
      Array.isArray(doc.subject) && doc.subject.length > 0
        ? doc.subject[0].slice(0, 50)
        : undefined;
    const totalPages =
      typeof doc.number_of_pages_median === 'number' &&
      doc.number_of_pages_median > 0
        ? doc.number_of_pages_median
        : undefined;
    const key = doc.key?.replace(/^\/works\//, '') ?? undefined;

    return {
      title,
      isbn,
      author,
      imageUrl,
      genre,
      totalPages,
      source: 'open_library' as BookSearchSource,
      externalId: key,
    };
  }
}
