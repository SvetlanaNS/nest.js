import { IsString, IsNumber, IsNotEmpty, ValidateIf } from 'class-validator';


export class CreateNewsDto {

    export class CreateNewsDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  discription: string;

  @IsNotEmpty()
  @IsString()
  autor: string;

  @ValidateIf((o) => o.countView || o.countView === '')
  countView: number;

  @ValidateIf((o) => o !== undefined)
  cover?: string;

}

