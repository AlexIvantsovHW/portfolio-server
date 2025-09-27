import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactEntity } from './entities/contact.entity';
import { MessageDto } from './dto/message.dto';
import { JwtAuthGuard } from 'src/auth/guards/auth/auth.guard';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body(new ValidationPipe()) createContactDto: CreateContactDto,
  ): Promise<CreateContactDto | MessageDto> {
    return this.contactService.create(createContactDto);
  }
  @Get()
  findAll(): Promise<ContactEntity[] | MessageDto> {
    return this.contactService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ContactEntity | MessageDto> {
    return this.contactService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateContactDto: UpdateContactDto,
  ): Promise<UpdateContactDto | MessageDto> {
    return this.contactService.update(+id, updateContactDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<ContactEntity | MessageDto> {
    return this.contactService.delete(+id);
  }
}
