import {
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

  /** Meta de minutos por día o páginas por día (el modelo interpreta el número). */
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(240)
  targetPerDay?: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  constraints?: string;
}
