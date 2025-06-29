import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SigninDto } from './dto/signin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    //private userService: UsersService,
  ) {}
  async login(loginDto: LoginDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: loginDto.email },
      });
      if (!user) {
        throw new HttpException(
          'There is no user with email- ${loginDto.email}',
          HttpStatus.BAD_GATEWAY,
        );
      }
      return 'This action adds a new auth';
    } catch (e) {
      handlePrismaError(e);
    }
  }

  signin(signinDto: SigninDto) {
    return `This action returns all auth`;
  }
}
