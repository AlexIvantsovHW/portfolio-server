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
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UsersService,
    @Inject(refreshJwtConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,
  ) {}
  async validateUser(password, email): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException();
    return true;
  }
  async login(loginDto: LoginDto) {
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
      return {
        access_token,
        refresh_token,
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
  refreshToken(id: number) {
    const payload = { sub: id };
    const token: string = this.jwtService.sign(payload);
    return { id, token };
  }
}
