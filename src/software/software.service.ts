import { Injectable } from '@nestjs/common';
import { CreateSoftwareDto } from './dto/create-software.dto';
import { UpdateSoftwareDto } from './dto/update-software.dto';
import { Tresponse } from 'src/utilts/models/response.type';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { PrismaService } from 'src/prisma/prisma.service';
import { ISoftwares } from './model/software.interface';

@Injectable()
export class SoftwareService {
  constructor(private prisma: PrismaService) {}
  async create(
    createSoftwareDto: CreateSoftwareDto,
  ): Promise<Tresponse<ISoftwares>> {
    try {
      const checkingSoftware = await this.prisma.software.findUnique({
        where: { title: createSoftwareDto.title },
      });
      if (checkingSoftware) {
        return { message: `${createSoftwareDto.title} is already exist in DB` };
      }
      await this.prisma.software.create({
        data: { ...createSoftwareDto },
      });
      const updatedData = await this.prisma.software.findMany();
      return {
        data: updatedData,
        message: `${createSoftwareDto.title} was successfully created!`,
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

  async findAll(): Promise<Tresponse<ISoftwares>> {
    try {
      const softwares = await this.prisma.software.findMany();
      return {
        data: softwares,
        message: 'Software data were successfully received',
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

  findOne(id: number) {
    return `This action returns a #${id} software`;
  }

  update(id: number, updateSoftwareDto: UpdateSoftwareDto) {
    return `This action updates a #${id} software`;
  }

  remove(id: number) {
    return `This action removes a #${id} software`;
  }
}
