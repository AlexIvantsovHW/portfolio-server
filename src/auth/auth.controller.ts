import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { LoginDto } from './dto/login.dto';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto) {
    try {
      console.log('controller', loginDto);
      return this.authService.login(loginDto);
    } catch (e) {
      handlePrismaError(e);
    }
  }
  @Post()
  signin(@Body() signinDto: SigninDto) {
    try {
      return this.authService.signin(signinDto);
    } catch (e) {
      handlePrismaError(e);
    }
  }
}
