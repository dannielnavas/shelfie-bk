import {
  IsString,
  IsOptional,
  IsInt,
  Min,
  Max,
  MaxLength,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SearchQueryDto {
  /** Búsqueda por título, autor o texto libre */
  @IsOptional()
  @IsString()
  @MaxLength(200)
  q?: string;

  /** Búsqueda por ISBN-10 o ISBN-13 (solo dígitos) */
  @IsOptional()
  @IsString()
  @Matches(/^\d{10}(\d{3})?$/, {
    message: 'isbn debe ser 10 o 13 dígitos',
  })
  @MaxLength(13)
  isbn?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(20)
  @Type(() => Number)
  limit?: number = 10;
}
