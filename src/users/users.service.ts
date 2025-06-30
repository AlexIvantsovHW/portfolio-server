import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { Tuser, Tusers } from './module/users.type';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<Tuser> {
    try {
      const saltRounds = 10;
      const { password, ...rest } = createUserDto;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const hashedPassword = (await bcrypt.hash(
        password,
        saltRounds,
      )) as string;
      const existingUsername = await this.prisma.user.findUnique({
        where: { username: rest.username },
      });
      const existingEmail = await this.prisma.user.findUnique({
        where: { email: rest.email },
      });

      if (existingUsername || existingEmail) {
        throw new HttpException(
          `User with email (${rest.email})  or username (${rest.username}) is already exist in DB!`,
          HttpStatus.NOT_FOUND,
        );
      }
      const newUser = await this.prisma.user.create({
        data: { ...rest, password: hashedPassword },
      });
      const { password: ps, id, ...response } = newUser;
      return response;
    } catch (e: unknown) {
      handlePrismaError(e as Error);
    }
  }

  async findAll(): Promise<Tusers[]> {
    try {
      return await this.prisma.user.findMany();
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async findOne(id: number): Promise<Tusers> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });

      if (!user) {
        throw new HttpException(
          `User with id ${id} doesn't exist in DB!`,
          HttpStatus.NOT_FOUND,
        );
      }
      return user;
    } catch (e) {
      handlePrismaError(e);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Tusers> {
    try {
      const user = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
      if (!user) {
        throw new HttpException(
          `User with id ${id} doesn't exist in DB!`,
          HttpStatus.NOT_FOUND,
        );
      }
      return user;
    } catch (e) {
      handlePrismaError(e);
    }
  }
  async findByEmail(email: string): Promise<Tusers> {
    try {
      const user = await this.prisma.user.findFirst({ where: { email } });
      if (!user)
        throw new HttpException(
          `There is no user with such ${email} email`,
          HttpStatus.NOT_FOUND,
        );
      return user;
    } catch (e: unknown) {
      handlePrismaError(e);
    }
  }
  async remove(id: number) {
    try {
      const user = await this.prisma.user.delete({ where: { id } });
      if (!user) {
        throw new HttpException(
          `User with id ${id} doesn't exist in DB!`,
          HttpStatus.NOT_FOUND,
        );
      }
      return user;
    } catch (e) {
      handlePrismaError(e);
    }
  }
}
