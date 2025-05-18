import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbackEnitiy } from './entities/feedback.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class FeedbacksService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<FeedbackEnitiy[]> {
    return this.prisma.feedbacks.findMany();
  }
  async findOne(id: number): Promise<FeedbackEnitiy | MessageDto> {
    const feedback = await this.prisma.feedbacks.findUnique({ where: { id } });
    if (!feedback || feedback === null)
      return { message: `Feedback with id ${id} doesn't exist in DB` };
    return feedback;
  }
  async update(
    id: number,
    updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<FeedbackEnitiy | MessageDto> {
    const feedback = await this.prisma.feedbacks.findUnique({ where: { id } });
    if (!feedback || feedback === null)
      return { message: `Feedback with id ${id} doesn't exist in DB` };
    return await this.prisma.feedbacks.update({
      where: { id },
      data: { ...updateFeedbackDto },
    });
  }
  async delete(id: number): Promise<FeedbackEnitiy | MessageDto> {
    const feedback = await this.prisma.feedbacks.findUnique({ where: { id } });
    if (!feedback || feedback === null)
      return { message: `Feedback with id ${id} doesn't exist in DB` };
    return await this.prisma.feedbacks.delete({ where: { id } });
  }
  async create(
    createFeedbackDto: CreateFeedbackDto,
  ): Promise<CreateFeedbackDto | MessageDto> {
    const feedback = await this.prisma.feedbacks.findFirst({
      where: {
        name: createFeedbackDto.name,
        date: createFeedbackDto.date,
        description: createFeedbackDto.description,
        position: createFeedbackDto.position,
        companyTitle: createFeedbackDto.companyTitle,
        logo: createFeedbackDto.logo,
      },
    });
    if (feedback) return { message: `Feedback exists in DB` };
    return await this.prisma.feedbacks.create({
      data: { ...createFeedbackDto },
    });
  }
}
