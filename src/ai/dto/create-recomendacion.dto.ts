import { IsString, IsOptional, IsObject } from 'class-validator';

export class CreateRecommendationDto {
  @IsString()
  promptSent: string;

  @IsOptional()
  @IsObject()
  aiResponseJson?: Record<string, unknown>;

  @IsOptional()
  @IsString()
  aiModel?: string;
}
