import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [UniversityController],
  providers: [UniversityService],
  imports: [PrismaModule],
  exports: [UniversityService],
})
export class UniversityModule {}
