import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { CommentMemoryRepository } from './comment.memory.repository';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentMemoryRepository
  ) {}

  async create(dto: CreateCommentDto) {
    const {postId, text, userId} = dto;
    const comment = {
      postId, 
      text, 
      userId,
      date: dayjs().toDate()
    };

    const commentEntity = await new CommentEntity(comment);
    return this.commentRepository.create(commentEntity);
  }

  

  async delete(id: string) {
    return this.commentRepository.destroy(id);
  }

}
