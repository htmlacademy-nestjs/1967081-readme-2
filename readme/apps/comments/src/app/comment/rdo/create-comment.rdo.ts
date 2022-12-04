import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateCommentRdo {

  @ApiProperty({
    description: 'Comment ID',
    example: '1234567'
  })
  @Expose({ name: '_id'})
  public commentId: string;

  @ApiProperty({
    description: 'User Id',
    example: '1234567'
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Post ID',
    example: '1234567'
  })
  @Expose()
  public postId: string;

  @ApiProperty({
    description: 'Comment text',
    example: 'Text between 10 and 300 symbols'
  })
  public text: string;

  @ApiProperty({
    description: 'Comment date',
    example: '2022-01-01T01:01:01.123Z'
  })
  @Expose()
  public date: Date;

}