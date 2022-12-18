import { PostInterface, PostState, PostType } from '@readme/shared-types';


export class PostEntity implements PostInterface {
  public _id?: string;
  public userId: string;
  public postDate: Date;
  public state: PostState;
  public type: PostType;
  public isRepost: boolean;
  public repostId?: string;
  public title: string;
  public link: string;
  public tags?: string[];
  public announcement: string;
  public postText: string;
  public quoteText: string;
  public quoteUser: string;
  public photo: string;
  public description?: string;
  public videoLink: string;

  constructor(post: PostInterface) {
    this.fillEntity(post);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(post: PostInterface) {
    this._id =  post._id;
    this.userId =  post.userId;
    this.postDate =  post.postDate;
    this.state =  post.state;
    this.type =  post.type;
    this.isRepost =  post.isRepost;
    this.repostId =  post.repostId;
    this.title =  post.title;
    this.link =  post.link;
    this.tags =  post.tags;
    this.announcement =  post.announcement;
    this.postText =  post.postText;
    this.quoteText =  post.quoteText;
    this.quoteUser =  post.quoteUser;
    this.photo =  post.photo;
    this.description =  post.description;
    this.videoLink =  post.videoLink;
  }
}