import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Post ID',
    example: '1234567'
  })
  public postId: string;

  @ApiProperty({
    description: 'Comment text',
    example: 'Text between 10 and 300 symbols'
  })
  public text: string;

  @ApiProperty({
    description: 'user Id',
    example: 'user Id'
  })
  public userId: string;
}