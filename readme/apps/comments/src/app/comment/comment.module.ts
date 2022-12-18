import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentMemoryRepository } from './comment.memory.repository';
import { CommentService } from './comment.service';


@Module({
  imports: [],
  exports:[],
  providers: [CommentService, CommentMemoryRepository],
  controllers: [CommentController],
})
export class CommentModule {}