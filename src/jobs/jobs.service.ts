import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateJobDto } from './dto/update-job.dto';
import { SoftwareService } from 'src/software/software.service';
import { Tresponse } from 'src/utilts/models/response.type';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { IJobs } from './module/jobs.interface';

@Injectable()
export class JobsService {
  constructor(
    private prisma: PrismaService,
    private readonly softwareService: SoftwareService,
  ) {}

  async findAll(): Promise<Tresponse<IJobs[]>> {
    try {
      const jobs = await this.prisma.jobs.findMany();
      const softwares = jobs.map((j) => j.software_id).flat();
      const jobSoftwares = await this.prisma.software.findMany({
        where: { id: { in: softwares } },
      });
      console.log('jobSoftwares', jobSoftwares);
      return { data: jobs, message: 'Jobs are received' };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async findOne(id: number): Promise<Tresponse<IJobs>> {
    const job = await this.prisma.jobs.findUnique({ where: { id } });
    return !job || job === null
      ? { message: `Job with id ${id} doesn't exist in DB` }
      : { data: job, message: `Job with id ${id} was successfully retrivied!` };
  }
  async create(createJobDto: CreateJobDto): Promise<Tresponse<IJobs[]>> {
    try {
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
      return await this.findAll();
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async update(
    id: number,
    updateJobDto: UpdateJobDto,
  ): Promise<Tresponse<IJobs[]>> {
    try {
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
      if ('data' in updatedData) {
        return {
          message: 'Job data was successfully updated',
          data: updatedData.data,
        };
      } else {
        return updatedData;
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async delete(id: number): Promise<Tresponse<IJobs[]>> {
    try {
      const job = await this.prisma.jobs.findFirst({ where: { id } });
      if (!job || job === null)
        return {
          message: `Job with id${id} doesn't exist in DB!`,
        };
      await this.prisma.jobs.delete({ where: { id } });
      const updatedData = await this.findAll();
      if ('data' in updatedData) {
        return {
          message: 'Job data was successfully updated',
          data: updatedData.data,
        };
      } else {
        return updatedData;
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
}
