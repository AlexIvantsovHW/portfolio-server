import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './entities/project.entity';
import { ProjectRepository } from './projects.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) {}
  
  async findAll() {
    return this.prisma.projects.findMany();  // Используем Prisma для запроса
  }
  async findOne(id:number){
    return this.prisma.projects.findUnique({where:{id:id}})
  }
  async create(createProjectDto:CreateProjectDto) {
    // Приводим CreateProjectDto к нужному формату

    return this.prisma.projects.create({
      data: {
      ...createProjectDto
      },
    });
  }

  
  //constructor(private readonly projectsRepository: ProjectRepository) {}
  /* create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  findAll(): Promise<ProjectEntity[]> {
    return this.projectsRepository.getAllProjects();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  } */
}
