import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbackEntity } from './feedback.entity';

@Injectable()
export class FeedbacksService {
  async createFeedback({
    name,
    email,
    message,
  }: CreateFeedbackDto): Promise<FeedbackEntity> {
    const feedback = new FeedbackEntity();

    feedback.name = name;
    feedback.email = email;
    feedback.message = message;
    await feedback.save();

    return feedback;
  }
}
