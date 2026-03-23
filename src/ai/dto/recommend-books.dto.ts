import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class RecommendBooksDto {
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  preferences?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  genres?: string[];

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(20)
  limit?: number;
}
