import { Injectable } from '@nestjs/common';
//import { JobsRepository } from './jobs.repository';
import { JobEntity } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}
  //constructor(private readonly jobsRepository: JobsRepository) {}
  async findAll() {
    return this.prisma.jobs.findMany();  // Используем Prisma для запроса
  }
/*   findAllJobs(): Promise<JobEntity[]> {
    return this.jobsRepository.getAllJobs();
  }
  createJob(createJobDto: CreateJobDto) {
    return this.jobsRepository.createJob(createJobDto);
  } */
}
