import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { Tresponse } from 'src/utilts/models/response.type';
import { IPersonal } from './model/personal.type';

@Injectable()
export class PersonalService {
  constructor(private prisma: PrismaService) {}

  async create(
    createPersonalDto: CreatePersonalDto,
  ): Promise<Tresponse<IPersonal[]>> {
    try {
      const person = await this.prisma.personal.findFirst({
        where: {
          surname: createPersonalDto.surname,
          username: createPersonalDto.username,
        },
      });
      if (person)
        throw new HttpException(`Person exists in DB!`, HttpStatus.CONFLICT);
      await this.prisma.personal.create({
        data: { ...createPersonalDto },
      });
      const updatedData = await this.prisma.personal.findMany();
      return { data: updatedData, message: 'Updated personal data received!' };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }

  async findAll(): Promise<Tresponse<IPersonal[]>> {
    try {
      const data = await this.prisma.personal.findMany();
      return { data, message: 'Personal data received!' };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async findOne(id: number): Promise<Tresponse<IPersonal>> {
    try {
      const data = await this.prisma.personal.findUnique({ where: { id } });
      if (!data || data === null)
        throw new HttpException(
          `Person with id ${id} doesn't exist in DB!`,
          HttpStatus.BAD_REQUEST,
        );

      return { data, message: 'Person data is received!' };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async update(
    id: number,
    updatePersonalDto: UpdatePersonalDto,
  ): Promise<Tresponse<IPersonal[]>> {
    try {
      const person = await this.prisma.personal.findUnique({ where: { id } });
      if (!person || person === null)
        throw new HttpException(
          `Person with id ${id} doesn't exist in DB!`,
          HttpStatus.BAD_REQUEST,
        );
      await this.prisma.personal.update({
        where: { id },
        data: { ...updatePersonalDto },
      });
      const updatedData = await this.prisma.personal.findMany();
      return {
        message: 'Person data was successfully updated',
        data: updatedData,
      };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async delete(id: number): Promise<Tresponse<IPersonal[]>> {
    try {
      const person = await this.prisma.personal.findUnique({ where: { id } });
      if (!person || person === null)
        throw new HttpException(
          `Person with id ${id} doesn't exist in DB!`,
          HttpStatus.BAD_REQUEST,
        );
      await this.prisma.personal.delete({ where: { id } });
      const updatedData = await this.prisma.personal.findMany();
      return {
        message: 'Person was successfully deleted!',
        data: updatedData,
      };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
}
