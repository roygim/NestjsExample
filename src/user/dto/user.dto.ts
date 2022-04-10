import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional
} from 'class-validator';
import { Exclude } from 'class-transformer';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // @IsString()
  // @IsOptional()
  // firstName?: string;

  // @IsString()
  // @IsOptional()
  // lastName?: string;
}
  