import { Module } from '@nestjs/common';
import { SoftwareService } from './software.service';
import { SoftwareController } from './software.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SoftwareController],
  providers: [SoftwareService],
  imports: [PrismaModule],
  exports: [SoftwareService],
})
export class SoftwareModule {}
