import { IsInt, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class AskBookDto {
  @IsString()
  @MinLength(3)
  @MaxLength(2000)
  question: string;

  /** Libro de la biblioteca del usuario (contexto automático). */
  @IsOptional()
  @IsInt()
  @Min(1)
  bookId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(8000)
  context?: string;
}
