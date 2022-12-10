import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateCommentRdo } from './rdo/create-comment.rdo';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
  ) { }

  @Post('')
  @ApiResponse({
    type: CreateCommentRdo,
    status: HttpStatus.CREATED,
    description: 'Comment post!'
  })
  async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.create(dto);
    return fillObject(CreateCommentRdo, newComment);
  }

  @Delete(':id')
  @ApiResponse({
    type: String,
    status: HttpStatus.OK,
    description: 'Comment delete!'
  })
  async delete(@Param('id') id: string) {
    return await this.commentService.delete(id)
  }

  @Get(':postId')
  @ApiResponse({
    status: HttpStatus.OK,
    description : "Comment get!"
  })
  async get(@Param('postId') postId: string) {
    console.log('start find postId');
    const comment = await this.commentService.findByPostId(postId);
    return comment;
  }

}
