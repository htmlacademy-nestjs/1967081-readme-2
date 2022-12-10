import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Patch } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CreatePostRdo } from './rdo/create-post.rdo';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) { }

  @Post('')
  @ApiResponse({
    type: CreatePostRdo,
    status: HttpStatus.CREATED,
    description: 'Post create!'
  })
  async create(@Body() dto: CreatePostDto) {
    const newPost = await this.postService.create(dto);
    return fillObject(CreatePostRdo, newPost);
  }

  @Delete(':id')
  @ApiResponse({
    type: String,
    status: HttpStatus.OK,
    description: 'Post delete!'
  })
  async delete(@Param('id') id: string) {
    return await this.postService.delete(id)
  }

  @Get('')
  @ApiResponse({
    status: HttpStatus.OK
  })
  async getAll() {
    const posts = await this.postService.getAll();

    return posts.map((post) => fillObject(CreatePostRdo, post));
  }

  @Get(':postId')
  @ApiResponse({
    status: HttpStatus.OK,
    description : "Post get!"
  })
  async get(@Param('postId') postId: string) {
    console.log('start find postId');
    const comment = await this.postService.findById(postId);
    return comment;
  }

  // @Patch(':id')
  // @ApiResponse({
  //   type: String,
  //   status: HttpStatus.OK,
  //   description: 'Post has been updated.',
  // })
  // async update(@Param('id') id: string, @Body() rdo: CreatePostRdo) {
  //   const updatedPost = await this.postService.update(id, rdo)
  //   return fillObject(CreatePostRdo, updatedPost);
  // }

}