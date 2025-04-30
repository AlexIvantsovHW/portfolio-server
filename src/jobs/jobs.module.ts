/* import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { JobsRepository } from './jobs.repository';
import { JobEntity } from './entities/job.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [JobsController],
  providers: [JobsService, JobsRepository],
  imports: [TypeOrmModule.forFeature([JobEntity])],
  exports: [JobsService],
})
export class JobsModule {}
 */
// src/jobs/jobs.module.ts
import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
//import { JobsRepository } from './jobs.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [JobsController],
  providers: [JobsService, /* JobsRepository */],
  imports: [PrismaModule],  // Добавляем PrismaModule вместо TypeOrmModule
  exports: [JobsService],
})
export class JobsModule {}
