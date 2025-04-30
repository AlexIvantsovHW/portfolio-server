import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
//import { ContactRepository } from './contact.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ContactController],
  providers: [ContactService, /* ContactRepository */],
  imports: [PrismaModule/* TypeOrmModule.forFeature([ContactEntity]) */],
  exports: [ContactService],
})
export class ContactModule {}
