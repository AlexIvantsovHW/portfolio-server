import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
//import { ContactRepository } from './contact.repository';
import { ContactEntity } from './entities/contact.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<ContactEntity[]> {
    return await this.prisma.contact.findMany();
  }
  async findOne(id: number): Promise<ContactEntity | MessageDto> {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact || contact === null)
      return { message: `Contact with id ${id} doesn't exist in DB` };
    return contact;
  }
  async update(
    id: number,
    updateContactDto: UpdateContactDto,
  ): Promise<UpdateContactDto | MessageDto> {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact || contact === null)
      return { message: `Contact with id ${id} doesn't exist in DB` };
    return await this.prisma.contact.update({
      where: { id },
      data: { ...updateContactDto },
    });
  }
  async create(
    createContactDto: CreateContactDto,
  ): Promise<CreateContactDto | MessageDto> {
    const checkingContact = await this.prisma.contact.findFirst({
      where: {
        whatsApp: createContactDto.whatsApp,
        telegram: createContactDto.telegram,
        linkedIn: createContactDto.linkedIn,
        phone: createContactDto.phone,
        email: createContactDto.email,
        cv: createContactDto.cv,
        website: createContactDto.website,
      },
    });
    if (checkingContact) return { message: `This contact exists in DB` };
    return await this.prisma.contact.create({ data: { ...createContactDto } });
  }
  async delete(id: number): Promise<ContactEntity | MessageDto> {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact || contact === null)
      return { message: `Contact with id ${id} doesn't exist in DB` };
    return await this.prisma.contact.delete({ where: { id } });
  }
}
