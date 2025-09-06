import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SigninDto } from './dto/signin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';
import { Response } from 'express';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UsersService,
    @Inject(refreshJwtConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,
  ) {}
  async validateUser(password: string, email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    console.log('user', user);
    if (!user) {
      throw new UnauthorizedException();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException();
    return true;
  }
  async login(loginDto: LoginDto, response: Response) {
    try {
      const { email, password } = loginDto;
      const isValid = await this.validateUser(password, email);

      if (!isValid) throw new UnauthorizedException();

      const user = await this.userService.findByEmail(email);

      if (!user) throw new UnauthorizedException();

      const payload = { sub: user.id, email: user.email };

      const access_token: string = this.jwtService.sign(payload, {
        expiresIn: '15m',
      });
      const refresh_token: string = this.jwtService.sign(
        payload,
        this.refreshTokenConfig,
      );

      response.cookie('refreshToken', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: '/',
      });
      response.cookie('accessToken', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 1000,
        path: '/',
      });
      return {
        response: { message: ['You are successfully authorized'], code: 200 },
      };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else {
        throw new HttpException(
          'Unknown error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async signin(signinDto: SigninDto) {
    try {
      const { password, email, username } = signinDto;
      const saltRings = 10;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const hashedPassword: string = await bcrypt.hash(password, saltRings);
      const newUser = await this.prisma.user.create({
        data: { password: hashedPassword, email, username },
      });
      if (!newUser)
        throw new HttpException('User was not created!', HttpStatus.CONFLICT);
      return newUser;
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new HttpException(
          e.stack || e.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      handlePrismaError(e);
    }
  }
  refreshToken(refreshToken: string, response: Response) {
    try {
      if (!refreshToken) throw new UnauthorizedException();
      const payload = this.jwtService.verify(
        refreshToken,
        this.refreshTokenConfig,
      );
      const newAccessToken = this.jwtService.sign(
        { sub: payload.sub, email: payload.email },
        { expiresIn: '15m' },
      );
      response.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000, // 15 минут
        path: '/',
      });
      return { message: 'Access token refreshed' };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    /* const payload = { sub: id };
    console.log('payload ', payload);
    const access_token: string = this.jwtService.sign(payload);
    console.log('access_token ', access_token);
    return { id, access_token }; */
  }

  logout(response: Response) {
    response.clearCookie('refreshToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    return {
      message: 'You are successfully logged out',
      code: 200,
    };
  }
}
