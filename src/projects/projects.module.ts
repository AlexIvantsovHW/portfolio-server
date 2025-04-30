import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectRepository } from './projects.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService/* , ProjectRepository */],
  imports: [PrismaModule/* TypeOrmModule.forFeature([ProjectEntity]) */],
  exports: [ProjectsService],
})
export class ProjectsModule {}
