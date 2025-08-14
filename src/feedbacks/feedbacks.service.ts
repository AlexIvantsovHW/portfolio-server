import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Tresponse } from 'src/utilts/models/response.type';
import { TFeedback, TFeedbacks } from './model/feedbacks.type';
import { handlePrismaError } from 'src/exception/prisma-error-handler/prisma-error-handler';

@Injectable()
export class FeedbacksService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<TFeedbacks[] | { message: string }> {
    try {
      const data = await this.prisma.feedbacks.findMany();
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async findOne(id: number): Promise<Tresponse<TFeedback>> {
    try {
      const feedback = await this.prisma.feedbacks.findUnique({
        where: { id },
      });
      if (!feedback)
        throw new HttpException(
          `Feedback with id ${id} doesn't exist in DB`,
          HttpStatus.NOT_FOUND,
        );
      return { data: feedback, message: `Feedback with id ${id} was found!` };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }

  async update(
    id: number,
    updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Tresponse<TFeedbacks[]>> {
    try {
      const feedback = await this.prisma.feedbacks.findUnique({
        where: { id },
      });
      if (!feedback)
        throw new HttpException(
          `Feedback with id ${id} doesn't exist in DB`,
          HttpStatus.NOT_FOUND,
        );
      await this.prisma.feedbacks.update({
        where: { id },
        data: { ...updateFeedbackDto },
      });
      const updatedData = await this.prisma.feedbacks.findMany();
      return {
        data: updatedData,
        message: `Feedback with id ${id} was successfully updated!`,
      };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async delete(id: number): Promise<Tresponse<TFeedbacks[]>> {
    try {
      const feedback = await this.prisma.feedbacks.findUnique({
        where: { id },
      });
      if (!feedback)
        throw new HttpException(
          `Feedback with id ${id} doesn't exist in DB`,
          HttpStatus.NOT_FOUND,
        );
      await this.prisma.feedbacks.delete({ where: { id } });
      const updatedData = await this.prisma.feedbacks.findMany();
      return {
        data: updatedData,
        message: `Feedback with id ${id} was deleted!`,
      };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
  async create(
    createFeedbackDto: CreateFeedbackDto,
  ): Promise<Tresponse<TFeedbacks[]>> {
    try {
      const feedback = await this.prisma.feedbacks.findFirst({
        where: {
          name: createFeedbackDto.name,
          date: createFeedbackDto.date,
          description: createFeedbackDto.description,
          position: createFeedbackDto.position,
          companyTitle: createFeedbackDto.companyTitle,
          logo: createFeedbackDto.logo,
          country: createFeedbackDto.country,
          city: createFeedbackDto.city,
        },
      });
      if (feedback)
        throw new HttpException(`Feedback exists in DB`, HttpStatus.CONFLICT);
      await this.prisma.feedbacks.create({
        data: { ...createFeedbackDto },
      });
      const updatedData = await this.prisma.feedbacks.findMany();
      return {
        data: updatedData,
        message: 'Feedback was successfully created!',
      };
    } catch (e: unknown) {
      if (e instanceof Error) {
        handlePrismaError(e);
      } else
        return {
          message: 'An unexpected error occurred while creating software.',
        };
    }
  }
}
