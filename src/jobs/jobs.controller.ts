import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Tresponse } from 'src/utilts/models/response.type';
import { IJobs } from './module/jobs.interface';
import { JwtAuthGuard } from 'src/auth/guards/auth/auth.guard';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(): Promise<Tresponse<IJobs[]>> {
    return this.jobsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(new ValidationPipe()) createJobDto: CreateJobDto) {
    return this.jobsService.create(createJobDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateJobDto: UpdateJobDto,
  ) {
    return this.jobsService.update(+id, updateJobDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.jobsService.delete(+id);
  }
}
