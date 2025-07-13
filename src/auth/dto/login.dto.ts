import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Tlogin } from '../module/login.type';

export class LoginDto implements Tlogin {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  password: string;
}
