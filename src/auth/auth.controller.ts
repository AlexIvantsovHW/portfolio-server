/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Res,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { LoginDto } from './dto/login.dto';
import { SigninDto } from './dto/signin.dto';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { Response, Request } from 'express';
import { JwtAuthGuard } from './guards/auth/auth.guard';
import { IAuthenticatedRequest } from './module/AuthenticatedRequest.type';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      return await this.authService.login(loginDto, response);
    } catch (e) {
      handlePrismaError(e);
    }
  }

  @Post('signin')
  async signin(@Body() signinDto: SigninDto) {
    console.log('signinDto', signinDto);
    try {
      return await this.authService.signin(signinDto);
    } catch (e) {
      handlePrismaError(e);
    }
  }
  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies?.refreshToken as string;
    return this.authService.refreshToken(refreshToken, res);
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response): any {
    try {
      return this.authService.logout(response);
    } catch (e) {
      handlePrismaError(e);
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('check')
  checkAuth(@Req() req: IAuthenticatedRequest) {
    return {
      message: 'Authenticated',
      user: req.user,
      authenticated: true,
    };
  }
}
