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

  async findOne(id: number): Promise<Tresponse<ISoftwares>> {
    try {
      const softwares = await this.prisma.software.findUnique({
        where: { id },
      });
      if (!softwares)
        return { message: `Software with id ${id} doesn't exist in DB` };
      return {
        data: [softwares],
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

  async update(
    id: number,
    updateSoftwareDto: UpdateSoftwareDto,
  ): Promise<Tresponse<ISoftwares>> {
    try {
      const softwares = await this.prisma.software.findUnique({
        where: { id },
      });

      if (!softwares)
        return { message: `Software with id ${id} doesn't exist in DB` };

      await this.prisma.software.update({
        where: { id },
        data: { ...updateSoftwareDto },
      });
      const updatedData = await this.prisma.software.findMany();
      return {
        data: updatedData,
        message: 'Software data were successfully updated',
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

  async remove(id: number): Promise<Tresponse<ISoftwares>> {
    try {
      const checkingSoftware = await this.prisma.software.findUnique({
        where: { id },
      });
      if (!checkingSoftware)
        return { message: `Software with id ${id} doesn't exist in DB` };
      await this.prisma.software.delete({ where: { id } });
      const updatedData = await this.prisma.software.findMany();
      return {
        data: updatedData,
        message: 'Software data were successfully deleted',
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
