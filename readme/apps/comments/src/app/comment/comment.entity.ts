import { CommentInterface } from "@readme/shared-types";

export class CommentEntity implements CommentInterface {
  public _id?: string;
  public userId: string;
  public postId: string;
  public text: string;
  public date: Date;

  constructor(comment: CommentInterface) {
    this.fillEntity(comment);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(comment: CommentInterface) {
    this._id = comment._id;
    this.userId = comment.userId;
    this.postId = comment.postId;
    this.text = comment.text;
    this.date = comment.date;

  }
}