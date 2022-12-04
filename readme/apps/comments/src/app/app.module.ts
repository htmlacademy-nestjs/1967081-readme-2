import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { CommentController } from './comment/comment.controller';

@Module({
  imports: [CommentModule],
  controllers: [AppController, CommentController],
  providers: [AppService],
})
export class AppModule {}
