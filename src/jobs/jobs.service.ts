import { Injectable } from '@nestjs/common';
import { JobEntity } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { PrismaService } from '../prisma/prisma.service';
import { MessageDto } from './dto/message.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { SoftwareService } from 'src/software/software.service';

@Injectable()
export class JobsService {
  constructor(
    private prisma: PrismaService,
    private readonly softwareService: SoftwareService,
  ) {}

  async findAll(): Promise<JobEntity[]> {
    return this.prisma.jobs.findMany();
  }
  async findOne(id: number): Promise<JobEntity | MessageDto> {
    const job = await this.prisma.jobs.findUnique({ where: { id } });
    return !job || job === null
      ? { message: `Job with id ${id} doesn't exist in DB` }
      : job;
  }
  async create(
    createJobDto: CreateJobDto,
  ): Promise<{ data: JobEntity[]; message: string } | MessageDto> {
    const checkingJob = await this.prisma.jobs.findFirst({
      where: {
        jobTitle: createJobDto.jobTitle,
        companyTitle: createJobDto.companyTitle,
        startAt: createJobDto.startAt,
        endAt: createJobDto.endAt,
        logo: createJobDto.logo,
      },
    });
    if (createJobDto?.software_id?.length > 0) {
      const checkResult = await this.softwareService.validateSoftwareIds(
        createJobDto.software_id,
      );
      if (checkResult !== true) return checkResult;
    }
    if (checkingJob)
      return {
        message: `This Job is already existing in DB!`,
      };
    await this.prisma.jobs.create({ data: { ...createJobDto } });
    const updatedData = await this.findAll();
    return {
      message: 'Job data was successfully updated',
      data: updatedData,
    };
  }
  async update(
    id: number,
    updateJobDto: UpdateJobDto,
  ): Promise<{ data: JobEntity[]; message: string } | MessageDto> {
    const job = await this.prisma.jobs.findFirst({
      where: { id },
    });
    if (!job || job === null)
      return {
        message: `Job with id${id} doesn't exist in DB!`,
      };
    if (updateJobDto?.software_id && updateJobDto?.software_id?.length > 0) {
      const checkResult = await this.softwareService.validateSoftwareIds(
        updateJobDto.software_id,
      );
      if (checkResult !== true) return checkResult;
    }

    await this.prisma.jobs.update({
      where: { id },
      data: { ...updateJobDto },
    });
    const updatedData = await this.findAll();
    return {
      message: 'Job data was successfully updated',
      data: updatedData,
    };
  }
  async delete(
    id: number,
  ): Promise<{ data: JobEntity[]; message: string } | MessageDto> {
    const job = await this.prisma.jobs.findFirst({ where: { id } });
    if (!job || job === null)
      return {
        message: `Job with id${id} doesn't exist in DB!`,
      };
    await this.prisma.jobs.delete({ where: { id } });
    const updatedData = await this.findAll();
    return {
      message: 'Job  was deleted ',
      data: updatedData,
    };
  }
}
