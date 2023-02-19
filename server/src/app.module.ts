import { Module } from '@nestjs/common';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [FeedbacksModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
