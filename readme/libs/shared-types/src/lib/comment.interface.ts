export interface CommentInterface {
  _id?: string;
  userId: string;
  postId: string;
  text: string;
  date: Date;
}