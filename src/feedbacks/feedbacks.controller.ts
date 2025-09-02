import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbackEnitiy } from './entities/feedback.entity';
import { MessageDto } from './dto/message.dto';
import { JwtAuthGuard } from 'src/auth/guards/auth/auth.guard';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}
  @Get()
  findAll() {
    return this.feedbacksService.findAll();
  }
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<UpdateFeedbackDto | MessageDto> {
    return this.feedbacksService.update(+id, updateFeedbackDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.feedbacksService.delete(+id);
  }
}
