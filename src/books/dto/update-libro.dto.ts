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

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @MaxLength(13)
  isbn?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  title?: string;

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
  @IsInt()
  @Min(0)
  @Type(() => Number)
  pagesRead?: number;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isOwned?: boolean;

  @IsOptional()
  @IsEnum(ReadingStatus)
  readingStatus?: ReadingStatus;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isBorrowed?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  borrowedToName?: string;

  @IsOptional()
  @IsString()
  borrowedAt?: string;
}
