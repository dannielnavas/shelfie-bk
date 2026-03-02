/**
 * Migración: libros desde JSON (MongoDB export) a la base relacional.
 * Asocia todos los registros al usuario con userId = 4.
 *
 * Uso:
 *   npm run prisma:migrate-books
 *   npm run prisma:migrate-books -- [ruta-al-json]
 *
 * Si no se pasa ruta, usa: /Users/dannielnavas/Documents/milibroapp.books.json
 */

import 'dotenv/config';
import { Prisma, PrismaClient, ReadingStatus } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const USER_ID = 4;
const DEFAULT_JSON_PATH =
  '/Users/dannielnavas/Documents/milibroapp.books.json';

type MongoDate = { $date: string };
type MongoOid = { $oid: string };

interface MongoBook {
  _id?: MongoOid;
  title: string;
  author?: string;
  isbn?: string;
  publication_year?: number;
  publisher?: string;
  image_url?: string;
  wishlist?: boolean;
  library?: string;
  createdAt?: MongoDate;
  updatedAt?: MongoDate;
  __v?: number;
  lenguaje?: string;
  endDate?: string;
  rating?: number;
  startDate?: string;
  status?: string;
  genre?: string;
  totalPages?: number;
  description?: string;
}

function parseDate(mongoDate: MongoDate | undefined): Date | undefined {
  if (!mongoDate || typeof mongoDate.$date !== 'string') return undefined;
  const d = new Date(mongoDate.$date);
  return isNaN(d.getTime()) ? undefined : d;
}

function mapStatus(record: MongoBook): ReadingStatus {
  const status = (record.status || '').toLowerCase();
  const hasEndAndRating =
    record.endDate && record.rating != null && record.rating > 0;

  if (status === 'reading') return ReadingStatus.in_progress;
  if (hasEndAndRating) return ReadingStatus.read;
  return ReadingStatus.pending;
}

function mapIsbn(isbn: string | undefined): string | null {
  if (isbn == null || String(isbn).trim() === '') return null;
  const s = String(isbn).trim();
  return s.length > 13 ? s.slice(0, 13) : s;
}

function mapRecord(
  record: MongoBook,
): Prisma.BookCreateManyInput {
  const addedAt = parseDate(record.createdAt) ?? new Date();
  return {
    userId: USER_ID,
    title: record.title || 'Sin título',
    author: record.author ?? null,
    isbn: mapIsbn(record.isbn),
    description: record.description ?? null,
    imageUrl: record.image_url ?? null,
    genre: record.genre ?? null,
    totalPages:
      record.totalPages != null && record.totalPages > 0
        ? record.totalPages
        : null,
    pagesRead: 0,
    isOwned: !record.wishlist,
    readingStatus: mapStatus(record),
    isBorrowed: false,
    borrowedToName: null,
    borrowedAt: null,
    addedAt,
  };
}

async function main() {
  const jsonPath =
    process.argv[2] ||
    process.env.MIGRATE_BOOKS_JSON_PATH ||
    DEFAULT_JSON_PATH;

  const resolvedPath = path.resolve(jsonPath);
  if (!fs.existsSync(resolvedPath)) {
    console.error('No se encontró el archivo:', resolvedPath);
    process.exit(1);
  }

  const raw = fs.readFileSync(resolvedPath, 'utf-8');
  let records: MongoBook[];
  try {
    records = JSON.parse(raw);
  } catch (e) {
    console.error('Error al parsear el JSON:', e);
    process.exit(1);
  }

  if (!Array.isArray(records)) {
    console.error('El JSON debe ser un array de libros.');
    process.exit(1);
  }

  const prisma = new PrismaClient();

  try {
    const result = await prisma.book.createMany({
      data: records.map(mapRecord),
    });
    console.log(`Migración completada: ${result.count} libros insertados para userId = ${USER_ID}.`);
  } catch (e) {
    console.error('Error al insertar libros:', e);
    throw e;
  } finally {
    await prisma.$disconnect();
  }
}

main();
