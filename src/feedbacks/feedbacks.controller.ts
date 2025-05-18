import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbackEnitiy } from './entities/feedback.entity';
import { MessageDto } from './dto/message.dto';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}
  @Get()
  findAll(): Promise<FeedbackEnitiy[]> {
    return this.feedbacksService.findAll();
  }
  @Post()
  create(
    @Body(new ValidationPipe()) createFeedbackDto: CreateFeedbackDto,
  ): Promise<CreateFeedbackDto | MessageDto> {
    return this.feedbacksService.create(createFeedbackDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<FeedbackEnitiy | MessageDto> {
    return this.feedbacksService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<UpdateFeedbackDto | MessageDto> {
    return this.feedbacksService.update(+id, updateFeedbackDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.feedbacksService.delete(+id);
  }
}
