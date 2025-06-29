import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { Tusers } from './module/users.type';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<Tusers> {
    try {
      return await this.prisma.user.create({ data: createUserDto });
    } catch (e) {
      handlePrismaError(e);
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
