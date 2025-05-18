import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './entities/project.entity';
import { IProjects } from './module/projects.interface';
import { PrismaService } from '../prisma/prisma.service';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ProjectEntity[]> {
    const projects = await this.prisma.projects.findMany();
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
  ): Promise<ProjectEntity | MessageDto> {
    const chechingProject = await this.prisma.projects.findFirst({
      where: { title: createProjectDto.title },
    });
    if (chechingProject || chechingProject != null)
      return {
        message: `Project: ${createProjectDto.title} is existing in DB!`,
      };

    const newProject = await this.prisma.projects.create({
      data: {
        ...createProjectDto,
      },
    });
    const transformedData = {
      ...newProject,
      startAt: newProject.startAt.toString(),
      endAt: newProject.endAt.toString(),
    };

    return transformedData;
  }
  async delete(id: number): Promise<CreateProjectDto | MessageDto> {
    const project = await this.prisma.projects.findUnique({ where: { id } });
    if (!project || project === null)
      return { message: `Project with id ${id} doesn't exist in DB` };
    const deletedProject = await this.prisma.projects.delete({ where: { id } });
    return {
      ...deletedProject,
      startAt: deletedProject.startAt.toString(),
      endAt: deletedProject.endAt.toString(),
    };
  }
  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<UpdateProjectDto | MessageDto> {
    const project = await this.prisma.projects.findUnique({ where: { id } });
    if (!project || project === null)
      return { message: `Project with id ${id} doesn't exist in DB` };
    const updatedProject = await this.prisma.projects.update({
      where: { id },
      data: updateProjectDto,
    });
    return {
      ...updatedProject,
      startAt: updatedProject.startAt.toString(),
      endAt: updatedProject.endAt.toString(),
    };
  }
}
