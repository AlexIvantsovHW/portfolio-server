import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

import { SoftwareModule } from 'src/software/software.module';
@Module({
  controllers: [JobsController],
  providers: [JobsService],
  imports: [PrismaModule, SoftwareModule],
  exports: [JobsService],
})
export class JobsModule {}
