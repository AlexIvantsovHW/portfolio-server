import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Tsignin } from '../module/signin.type';

export class SigninDto implements Tsignin {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  password: string;

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  username: string;
}
