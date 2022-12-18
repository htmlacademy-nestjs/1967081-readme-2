import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { PostMemoryRepository } from './post.memory.repository';
import { PostEntity } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { PostInterface } from '@readme/shared-types';
import { DEFAULT_POST_STATE} from './post.constant';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostMemoryRepository
  ) {}

  async create(dto: CreatePostDto): Promise<PostInterface> {
    const post = { ...dto, postDate: dayjs().toDate(), state: DEFAULT_POST_STATE, isRepost: false, userId: '' };

    const postEntity = new PostEntity(post);

    return this.postRepository.create(postEntity);
  }

  async delete(id: string) {
    return this.postRepository.destroy(id);
  }

  async getAll() {
    return this.postRepository.findAll();
  }

  async findById(postId: string) {
    console.log('start find post by id');
    return await this.postRepository.findById(postId);
  }

  public async update(id: string, item: PostEntity) {
    this.postRepository[id] = {...item.toObject(), _id: id};
    return this.findById(id);
  }

}
