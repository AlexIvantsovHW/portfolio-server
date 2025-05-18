import { Injectable } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { PersonalEntity } from './entities/personal.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class PersonalService {
  constructor(private prisma: PrismaService) {}

  async create(
    createPersonalDto: CreatePersonalDto,
  ): Promise<PersonalEntity | MessageDto> {
    const person = await this.prisma.personal.findFirst({
      where: {
        surname: createPersonalDto.surname,
        username: createPersonalDto.username,
      },
    });
    if (person) return { message: `Person exists in DB!` };
    return await this.prisma.personal.create({
      data: { ...createPersonalDto },
    });
  }

  findAll(): Promise<PersonalEntity[]> {
    return this.prisma.personal.findMany();
  }
  async findOne(id: number): Promise<PersonalEntity | MessageDto> {
    const person = await this.prisma.personal.findUnique({ where: { id } });
    if (!person || person === null)
      return { message: `Person with id ${id} doesn't exist in DB!` };
    return person;
  }
  async update(
    id: number,
    updatePersonalDto: UpdatePersonalDto,
  ): Promise<PersonalEntity | MessageDto> {
    const person = await this.prisma.personal.findUnique({ where: { id } });
    if (!person || person === null)
      return { message: `Person with id ${id} doesn't exist in DB!` };
    return this.prisma.personal.update({
      where: { id },
      data: { ...updatePersonalDto },
    });
  }
  async delete(id: number): Promise<PersonalEntity | MessageDto> {
    const person = await this.prisma.personal.findUnique({ where: { id } });
    if (!person || person === null)
      return { message: `Person with id ${id} doesn't exist in DB!` };
    return await this.prisma.personal.delete({ where: { id } });
  }
}
