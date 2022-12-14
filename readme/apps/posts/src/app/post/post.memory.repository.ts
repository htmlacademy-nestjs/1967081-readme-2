import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@readme/core';
import { PostInterface } from '@readme/shared-types';
import { PostEntity } from './post.entity';
import * as crypto from 'crypto';

@Injectable()
export class PostMemoryRepository implements CRUDRepository<PostEntity, string, PostInterface> {
  private repository: { [key: string]: PostInterface } = {};

  public async create(item: PostEntity): Promise<PostInterface> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;

    return { ...entry };
  }

  public async findById(id: string): Promise<PostInterface> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async findAll(): Promise<PostInterface[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: PostEntity): Promise<PostInterface> {
    this.repository[id] = {...item.toObject(), _id: id};
    return this.findById(id);
  }
}