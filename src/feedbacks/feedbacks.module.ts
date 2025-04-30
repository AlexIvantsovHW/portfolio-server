import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
//import { FeedbacksRepository } from './feedbacks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEnitiy } from './entities/feedback.entity';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksService/* , FeedbacksRepository */],
  imports: [PrismaModule/* TypeOrmModule.forFeature([FeedbackEnitiy]) */],
  exports: [FeedbacksService],
})
export class FeedbacksModule {}
