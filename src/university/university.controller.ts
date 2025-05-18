import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityEntity } from './entities/university.entity';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { CreateUniversityDto } from './dto/create-university.dto';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}
  @Get()
  findAll(): Promise<UniversityEntity[]> {
    return this.universityService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universityService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateUniversityDto: UpdateUniversityDto,
  ) {
    return this.universityService.update(+id, updateUniversityDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.universityService.delete(+id);
  }
  @Post()
  create(@Body(new ValidationPipe()) createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  }
}
