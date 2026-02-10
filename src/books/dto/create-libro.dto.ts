import {
  IsString,
  IsOptional,
  IsInt,
  IsBoolean,
  IsEnum,
  Min,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ReadingStatus } from '@prisma/client';

export class CreateBookDto {
  @IsOptional()
  @IsString()
  @MaxLength(13)
  isbn?: string;

  @IsString()
  @MaxLength(255)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  author?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  genre?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  totalPages?: number;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isOwned?: boolean;

  @IsOptional()
  @IsEnum(ReadingStatus)
  readingStatus?: ReadingStatus;
}
