import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbackEntity } from './feedback.entity';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private feedbacksService: FeedbacksService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createFeedback(
    @Body() CreateFeedbackDto: CreateFeedbackDto,
  ): Promise<FeedbackEntity> {
    return this.feedbacksService.createFeedback(CreateFeedbackDto);
  }
}
