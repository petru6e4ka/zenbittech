import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/feedbacks/feedback.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2403',
  database: 'feedbackmanagment',
  entities: [FeedbackEntity],
  synchronize: true,
};
