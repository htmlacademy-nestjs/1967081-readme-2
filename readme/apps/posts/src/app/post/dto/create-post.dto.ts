import { ApiProperty } from '@nestjs/swagger';
import { PostType } from '@readme/shared-types';

export class CreatePostDto {
  @ApiProperty({
    description: 'Post type',
    example: 'Types: video, text, quote, photo, link'
  })
  public type: PostType;

  @ApiProperty({
    description: 'Title',
    example: 'Title',
  })
  public title: string;

  @ApiProperty({
    description: 'Link',
    example: 'https://html.ru/link',
  })
  public link: string;

  @ApiProperty({
    description: 'Tags',
    example: ''
  })
  public tags?: string[];

  @ApiProperty({
    description: 'Post announcement',
    example: 'announcement',
  })
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
  public quoteText: string;

  @ApiProperty({
    description: 'Quote user',
    example: 'Quote user',
  })
  public quoteUser: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  public photo: string;

  @ApiProperty({
    description: 'Post description',
    example: 'Description text',
  })
  public description?: string;

  @ApiProperty({
    description: 'Video link',
    example: 'https://html.ru/123.mp3',
  })
  public videoLink: string;

}