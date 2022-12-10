import { PostState } from './post-state.enum';
import { PostType } from './post-type.enum';

export interface PostInterface {
  _id?: string;
  userId: string;
  postDate: Date;
  state: PostState;
  type: PostType;
  isRepost: boolean;
  repostId?: string;
  title: string;
  link: string;
  tags?: string[];
  announcement: string;
  postText: string;
  quoteText: string;
  quoteUser: string;
  photo: string;
  description?: string;
  videoLink: string;
}