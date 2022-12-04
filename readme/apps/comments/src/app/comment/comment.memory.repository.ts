import { Injectable } from '@nestjs/common';
import {CRUDRepository} from '@readme/core';
import * as crypto from 'crypto';
import {CommentInterface} from '@readme/shared-types';
import {CommentEntity} from './comment.entity';
import { COMMENT_FIND_COUNT } from './comment.constant';

@Injectable()
export class CommentMemoryRepository implements CRUDRepository<CommentEntity, string, CommentInterface> {
  private repository: {[key: string]: CommentInterface} = {};

  public async create(item: CommentEntity): Promise<CommentInterface> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    console.log(this.repository);
    return {...entry};
  }

  public async findById(id: string): Promise<CommentInterface> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }


  public async find(postId: string): Promise<CommentInterface> {
    //Сделать поиск 50 комментариев публикации. Пока хз как
    console.log(COMMENT_FIND_COUNT);
    return this.repository[postId];
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: CommentEntity): Promise<CommentInterface> {
    this.repository[id] = {...item.toObject(), _id: id};
    return this.findById(id);
  }
}