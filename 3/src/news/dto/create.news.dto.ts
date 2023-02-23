import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  title: string;

  @IsString({
    message: 'поле description должно быть строкой',
  })
  description: string;

  @IsString()
  author: string;

  @IsOptional()
  @IsString()
  countView?: number;

  @IsOptional()
  @IsString()
  cover?: string;
}
