import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id')id:string){
    return this.projectsService.findOne(+id)
  }
  @Post()
  create(@Body() createProjectDto:CreateProjectDto){
    console.log(createProjectDto)
    return this.projectsService.create(createProjectDto)
  }
  @Delete(':id')
  delete(@Param('id')id:string){
    return this.projectsService.delete(+id)
  }
  @Patch(':id')
  update(@Param('id')id:string,@Body()updateProjectDto:UpdateProjectDto){
    return this.projectsService.update(+id,updateProjectDto)
  }

}
