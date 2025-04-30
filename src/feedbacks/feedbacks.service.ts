import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
//import { FeedbacksRepository } from './feedbacks.repository';
import { FeedbackEnitiy } from './entities/feedback.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FeedbacksService { constructor(private prisma: PrismaService) {}
  //constructor(private readonly feedbacksRepository: FeedbacksRepository) {}
  async findAll() {
    return this.prisma.jobs.findMany();  // Используем Prisma для запроса
  }
 
 /*  create(createFeedbackDto: CreateFeedbackDto) {
    return this.feedbacksRepository.createFeedback(createFeedbackDto);
  }

  findAll(): Promise<FeedbackEnitiy[]> {
    return this.feedbacksRepository.getAllFeedbacks();
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return `This action updates a #${id} feedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  } */
}
