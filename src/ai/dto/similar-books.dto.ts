import { IsInt, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class SimilarBooksDto {
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  author?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(15)
  limit?: number;
}
