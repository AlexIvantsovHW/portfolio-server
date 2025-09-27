import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();

    // Если нет токена в cookies и в Authorization header
    if (!request.cookies?.refreshToken && !request.headers.authorization) {
      throw new UnauthorizedException('No access token provided');
    }

    if (err || !user) {
      // Если токен истек или невалиден
      if (info?.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Access token has expired');
      }
      if (info?.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid access token');
      }
      throw err || new UnauthorizedException('Authentication failed');
    }

    return user;
  }
}
