import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { PersonalService } from './personal.service';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { PersonalEntity } from './entities/personal.entity';
import { MessageDto } from './dto/message.dto';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Get()
  findAll(): Promise<PersonalEntity[]> {
    return this.personalService.findAll();
  }
  @Post()
  create(
    @Body(new ValidationPipe()) createPersonalDto: CreatePersonalDto,
  ): Promise<PersonalEntity | MessageDto> {
    return this.personalService.create(createPersonalDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updatePersonalDto: UpdatePersonalDto,
  ): Promise<PersonalEntity | MessageDto> {
    return this.personalService.update(+id, updatePersonalDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<PersonalEntity | MessageDto> {
    return this.personalService.delete(+id);
  }
}
