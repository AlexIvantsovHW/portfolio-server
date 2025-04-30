import { Injectable } from '@nestjs/common';
import { UniversityEntity } from './entities/university.entity';
import { PrismaService } from 'src/prisma/prisma.service';
//import { UniversityRepository } from './university.repository';

@Injectable()
export class UniversityService {
  //constructor(private readonly universityRepository: UniversityRepository) {}

 /*  findAll(): Promise<UniversityEntity[]> {
    return this.universityRepository.getAllUniversities();
  } */
  constructor(private prisma: PrismaService) {}
  
    async findAll() {
      return this.prisma.universities.findMany();  // Используем Prisma для запроса
    }
}
