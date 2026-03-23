import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class BookSummaryDto {
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  author?: string;

  @IsOptional()
  @IsString()
  @MaxLength(8000)
  description?: string;
}
