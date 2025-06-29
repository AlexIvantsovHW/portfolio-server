import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
import { Tuser } from '../module/users.type';

export class CreateUserDto implements Tuser {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Username should include min 4 chars!' })
  username: string;
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minSymbols: 1,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
}
