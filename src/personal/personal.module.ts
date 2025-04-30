import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalEntity } from './entities/personal.entity';
import { PersonalRepository } from './personal.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PersonalController],
  providers: [PersonalService,/*  PersonalRepository */],
  imports: [PrismaModule/* TypeOrmModule.forFeature([PersonalEntity]) */],
  exports: [PersonalService],
})
export class PersonalModule {}
