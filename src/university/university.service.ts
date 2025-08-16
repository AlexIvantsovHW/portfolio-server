import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UniversityEntity } from './entities/university.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { Tresponse } from 'src/utilts/models/response.type';
import { UniversitiesType } from './model/type';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
@Injectable()
export class UniversityService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UniversityEntity[]> {
    const universities = await this.prisma.universities.findMany();
    const transferDateUniversities = universities.map((university) => {
      return {
        ...university,
        startAt: university.startAt,
        endAt: university.endAt,
      };
    });

    return transferDateUniversities;
  }
  async findOne(id: number): Promise<Tresponse<UniversitiesType>> {
    try {
      const university = await this.prisma.universities.findUnique({
        where: { id },
      });
      if (!university)
        throw new HttpException(
          `University with id ${id} doesn't exist in DB!`,
          HttpStatus.NOT_FOUND,
        );
      return {
        data: university,
        message: `University with id ${id} was found in DB!`,
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
  async create(
    createUniversityDto: CreateUniversityDto,
  ): Promise<Tresponse<UniversitiesType[]>> {
    try {
      const university = await this.prisma.universities.findFirst({
        where: {
          companyTitle: createUniversityDto.companyTitle,
          title: createUniversityDto.title,
          startAt: createUniversityDto.startAt,
          endAt: createUniversityDto.endAt,
        },
      });
      if (university)
        throw new HttpException(
          `University ${createUniversityDto.title} exists in DB!`,
          HttpStatus.NOT_FOUND,
        );
      await this.prisma.universities.create({
        data: { ...createUniversityDto },
      });
      const updatedData = await this.prisma.universities.findMany();
      return {
        data: updatedData,
        message: `University ${createUniversityDto.title} was successfully created!`,
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
    updateUniversityDto: UpdateUniversityDto,
  ): Promise<Tresponse<UniversitiesType[]>> {
    try {
      const university = await this.prisma.universities.findUnique({
        where: { id },
      });
      if (!university)
        throw new HttpException(
          `University with id ${id} doesn't exist in DB!`,
          HttpStatus.NOT_FOUND,
        );
      await this.prisma.universities.update({
        where: { id },
        data: { ...updateUniversityDto },
      });
      const updatedData = await this.prisma.universities.findMany();
      return {
        message: 'Univeristy data was successfully updated',
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
  async delete(id: number): Promise<Tresponse<UniversitiesType[]>> {
    try {
      const university = await this.prisma.universities.findUnique({
        where: { id },
      });
      if (!university)
        throw new HttpException(
          `University with id ${id} doesn't exist in DB!`,
          HttpStatus.NOT_FOUND,
        );
      await this.prisma.universities.delete({ where: { id } });
      const updatedData = await this.prisma.universities.findMany();
      return {
        data: updatedData,
        message: `University with id ${id} was deleted fron DB!`,
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
