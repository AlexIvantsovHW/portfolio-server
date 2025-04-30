import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
//import { ContactRepository } from './contact.repository';
import { ContactEntity } from './entities/contact.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) {}
    async findAll() {
      return this.prisma.contact.findMany();  // Используем Prisma для запроса
    }
  //constructor(private readonly contactRepository: ContactRepository) {}
/*   create(createContactDto: CreateContactDto) {
    return this.contactRepository.createContact(createContactDto);
  }

  findAll(): Promise<ContactEntity[]> {
    return this.contactRepository.getAllContact();
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  } */
}
