import {
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class ReadingPlanDto {
  /** Si se envía, se cargan título, autor y páginas desde la estantería del usuario. */
  @IsOptional()
  @IsInt()
  @Min(1)
  bookId?: number;

  @ValidateIf((o: ReadingPlanDto) => o.bookId == null)
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  author?: string;

  @ValidateIf((o: ReadingPlanDto) => o.bookId == null)
  @IsOptional()
  @IsInt()
  @Min(1)
  totalPages?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  pagesRead?: number;

  /**
   * Meta diaria: páginas (por defecto) o minutos de lectura si `targetUnit` es `minutes`.
   * El backend convierte minutos → páginas con ~2 min/página para el cálculo del plan.
   */
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(600)
  targetPerDay?: number;

  @IsOptional()
  @IsIn(['pages', 'minutes'])
  targetUnit?: 'pages' | 'minutes';

  @IsOptional()
  @IsString()
  @MaxLength(500)
  constraints?: string;
}
