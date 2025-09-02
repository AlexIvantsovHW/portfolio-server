import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { LoginDto } from './dto/login.dto';
import { SigninDto } from './dto/signin.dto';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto) {
    try {
      return this.authService.login(loginDto);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    try {
      return this.authService.signin(signinDto);
    } catch (e) {
      handlePrismaError(e);
    }
  }
  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Req() id: number) {
    return this.authService.refreshToken(id);
  }
}
