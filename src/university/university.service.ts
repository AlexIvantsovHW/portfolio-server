import { Injectable } from '@nestjs/common';
import { UniversityEntity } from './entities/university.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { MessageDto } from './dto/message.dto';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
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
  async findOne(id: number): Promise<UniversityEntity | MessageDto> {
    const university = await this.prisma.universities.findUnique({
      where: { id },
    });
    return !university || university === null
      ? { message: `University with id ${id} doesn't exist in DB!` }
      : university;
  }
  async create(
    createUniversityDto: CreateUniversityDto,
  ): Promise<UniversityEntity | MessageDto> {
    const university = await this.prisma.universities.findFirst({
      where: {
        companyTitle: createUniversityDto.companyTitle,
        title: createUniversityDto.title,
        startAt: createUniversityDto.startAt,
        endAt: createUniversityDto.endAt,
      },
    });
    return university || university != null
      ? { message: `University ${createUniversityDto.title} exists in DB!` }
      : await this.prisma.universities.create({
          data: { ...createUniversityDto },
        });
  }
  async update(
    id: number,
    updateUniversityDto: UpdateUniversityDto,
  ): Promise<UniversityEntity | MessageDto> {
    const university = await this.prisma.universities.findUnique({
      where: { id },
    });
    return !university || university === null
      ? { message: `University with id ${id} doesn't exist in DB!` }
      : await this.prisma.universities.update({
          where: { id },
          data: { ...updateUniversityDto },
        });
  }
  async delete(id: number): Promise<UniversityEntity | MessageDto> {
    const university = await this.prisma.universities.findUnique({
      where: { id },
    });
    return !university || university === null
      ? { message: `University with id ${id} doesn't exist in DB!` }
      : await this.prisma.universities.delete({ where: { id } });
  }
}
