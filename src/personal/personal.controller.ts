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
import { PersonalService } from './personal.service';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { JwtAuthGuard } from 'src/auth/guards/auth/auth.guard';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Get()
  findAll() {
    return this.personalService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(new ValidationPipe()) createPersonalDto: CreatePersonalDto) {
    return this.personalService.create(createPersonalDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalService.findOne(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updatePersonalDto: UpdatePersonalDto,
  ) {
    return this.personalService.update(+id, updatePersonalDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.personalService.delete(+id);
  }
}
