import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jws.strategy';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    ConfigModule,
    UsersModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [JwtStrategy, AuthService],
})
export class AuthModule {}
