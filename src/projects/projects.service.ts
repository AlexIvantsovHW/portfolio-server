import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './entities/project.entity';
import { IProjects, Tproject } from './module/projects.interface';
import { PrismaService } from '../prisma/prisma.service';
import { MessageDto } from './dto/message.dto';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';
import { Tresponse } from 'src/utilts/models/response.type';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ProjectEntity[]> {
    const projects = await this.prisma.projects.findMany({
      orderBy: { endAt: 'desc' },
    });

    const dateTransformProjects = projects.map((project) => {
      return {
        ...project,
        startAt: project.startAt.toString(),
        endAt: project.endAt.toString(),
      };
    });
    return dateTransformProjects;
  }
  async findOne(id: number): Promise<IProjects | MessageDto> {
    const project = await this.prisma.projects.findUnique({
      where: { id: id },
    });
    if (!project) {
      return { message: `Project with id:${id} doesn't exist in DB` };
    }
    const dateTransformProject = {
      ...project,
      startAt: project?.startAt.toString(),
      endAt: project?.endAt.toString(),
    };
    return dateTransformProject;
  }
  async create(
    createProjectDto: CreateProjectDto,
  ): Promise<Tresponse<Tproject[]>> {
    try {
      const chechingProject = await this.prisma.projects.findFirst({
        where: { title: createProjectDto.title },
      });
      if (chechingProject || chechingProject != null)
        return {
          message: `Project: ${createProjectDto.title} is existing in DB!`,
        };

      await this.prisma.projects.create({
        data: {
          ...createProjectDto,
        },
      });

      const updatedData = (await this.prisma.projects.findMany()).map((p) => {
        return {
          ...p,
          startAt: p.startAt.toString(),
          endAt: p.endAt.toString(),
        };
      });

      return {
        data: updatedData,
        message: 'Project was successfully created!',
      };
    } catch (e) {
      handlePrismaError(e);
    }
  }
  async delete(id: number): Promise<Tresponse<IProjects[]>> {
    try {
      const project = await this.prisma.projects.findUnique({ where: { id } });
      if (!project || project === null)
        return { message: `Project with id ${id} doesn't exist in DB` };
      await this.prisma.projects.delete({
        where: { id },
      });
      const updatedData = (await this.prisma.projects.findMany()).map((p) => {
        return {
          ...p,
          startAt: p.startAt.toString(),
          endAt: project.endAt.toString(),
        };
      });
      return {
        data: updatedData,
        message: 'Project was successfully deleted!',
      };
    } catch (e) {
      handlePrismaError(e);
    }
  }
  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<{ data: ProjectEntity[]; message: string } | MessageDto> {
    try {
      const project = await this.prisma.projects.findUnique({ where: { id } });
      if (!project || project === null)
        throw new HttpException(
          `Project with id ${id} doesn't exist in DB`,
          HttpStatus.CONFLICT,
        );
      await this.prisma.projects.update({
        where: { id },
        data: updateProjectDto,
      });
      const updatedData = await this.findAll();
      return {
        message: 'Project data was successfully updated',
        data: updatedData,
      };
    } catch (e) {
      handlePrismaError(e);
    }
  }
}
