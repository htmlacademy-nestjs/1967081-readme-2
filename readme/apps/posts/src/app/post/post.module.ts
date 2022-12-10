import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostMemoryRepository } from './post.memory.repository';
import { PostService } from './post.service';


@Module({
  imports: [],
  exports:[],
  providers: [PostService, PostMemoryRepository],
  controllers: [PostController],
})
export class PostModule {}
