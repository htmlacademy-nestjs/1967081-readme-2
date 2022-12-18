import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@readme/core';
import * as crypto from 'crypto';
import { CommentInterface } from '@readme/shared-types';
import { CommentEntity } from './comment.entity';
import { COMMENTS_FIND_COUNT } from './comment.constant';

@Injectable()
export class CommentMemoryRepository implements CRUDRepository<CommentEntity, string, CommentInterface> {
  private repository: { [key: string]: CommentInterface } = {};

  public async create(item: CommentEntity): Promise<CommentInterface> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;
    console.log(this.repository);
    return { ...entry };
  }

  public async findById(id: string): Promise<CommentInterface> {
    throw new Error(`Method "findById" not implemented ${id}`);
  }

  public async findByPostId(postId: string): Promise<CommentInterface[]> {
    console.log(`Start find repo ${postId}`);
    return Object.values(this.repository)
      .filter((item) => item.postId === postId)
      .slice(0, COMMENTS_FIND_COUNT);
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: CommentEntity): Promise<CommentInterface> {
    throw new Error(`Method "findById" not implemented ${id} ${item}`);
  }
}