import { Injectable } from '@nestjs/common';
import { JobEntity } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { PrismaService } from '../prisma/prisma.service';
import { MessageDto } from './dto/message.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<JobEntity[]> {
    return this.prisma.jobs.findMany();
  }
  async findOne(id: number): Promise<JobEntity | MessageDto> {
    const job = await this.prisma.jobs.findUnique({ where: { id } });
    return !job || job === null
      ? { message: `Job with id ${id} doesn't exist in DB` }
      : job;
  }
  async create(createJobDto: CreateJobDto): Promise<CreateJobDto | MessageDto> {
    const checkingJob = await this.prisma.jobs.findFirst({
      where: {
        jobTitle: createJobDto.jobTitle,
        companyTitle: createJobDto.companyTitle,
        startAt: createJobDto.startAt,
        endAt: createJobDto.endAt,
      },
    });
    if (checkingJob)
      return {
        message: `This Job is already existing in DB!`,
      };
    return this.prisma.jobs.create({ data: { ...createJobDto } });
  }
  async update(
    id: number,
    updateJobDto: UpdateJobDto,
  ): Promise<UpdateJobDto | MessageDto> {
    const job = await this.prisma.jobs.findFirst({
      where: { id },
    });
    if (!job || job === null)
      return {
        message: `Job with id${id} doesn't exist in DB!`,
      };
    return this.prisma.jobs.update({
      where: { id },
      data: { ...updateJobDto },
    });
  }
  async delete(id: number): Promise<CreateJobDto | MessageDto> {
    const job = await this.prisma.jobs.findFirst({ where: { id } });
    if (!job || job === null)
      return {
        message: `Job with id${id} doesn't exist in DB!`,
      };
    return this.prisma.jobs.delete({ where: { id } });
  }
}
