import { ApiProperty } from '@nestjs/swagger';
import { PostState, PostType } from '@readme/shared-types';
import { Expose } from 'class-transformer';

export class CreatePostRdo {

  @ApiProperty({
    description: 'post id',
    example: 'post i'
  })
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User Id',
    example: '1234567'
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Date of publication',
    example: '2022-01-01T01:01:01.123Z'
  })
  @Expose()
  public postDate: Date;

  @ApiProperty({
    description: 'State of post',
    example: 'States: draft, published'
  })
  @Expose()
  public state: PostState;

  @ApiProperty({
    description: 'Is repost',
    example: 'true'
  })
  @Expose()
  public isRepost: boolean;

  @ApiProperty({
    description: 'Post type',
    example: 'Types: video, text, quote, photo, link'
  })
  @Expose()
  public type: PostType;

  @ApiProperty({
    description: 'Title',
    example: 'Title',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Link',
    example: 'https://html.ru/link',
  })
  @Expose()
  public link: string;

  @ApiProperty({
    description: 'Tags',
    example: ''
  })
  @Expose()
  public tags?: string[];

  @ApiProperty({
    description: 'Post announcement',
    example: 'announcement',
  })
  @Expose()
  public announcement: string;

  @ApiProperty({
    description: 'Post text',
    example: 'text',
  })
  public postText: string;

  @ApiProperty({
    description: 'Quote text',
    example: 'Quote text',
  })
  @Expose()
  public quoteText: string;

  @ApiProperty({
    description: 'Quote user',
    example: 'Quote user',
  })
  @Expose()
  public quoteUser: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  @Expose()
  public photo: string;

  @ApiProperty({
    description: 'Post description',
    example: 'Description text',
  })
  @Expose()
  public description?: string;

  @ApiProperty({
    description: 'Video link',
    example: 'https://html.ru/123.mp3',
  })
  @Expose()
  public videoLink: string;

}