/* User */
export interface UserType {
  userId: string;
  email: string;
  password: string;
  nickname?: string;
}

export interface UserProps {
  userId: string;
  email: string;
  password: string;
  nickname: string;
  errormsg?: string | null;
}

export interface NewUser {
  newUser: UserType;
  errormsg?: string;
}

export interface SearchUserType {
  email?: string;
  nickname?: string;
}

export interface UpdatedProps {
  id: string;
  fieldToUpdate: string;
  newValue: string;
}

export interface UserUpdateProps {
  user_id: string;
  toUpdate: UserType;
}

/* Post */
export interface SinglePost {
  postId: string;
  title: string;
  writer: string;
  nickname: string;
  content: string;
  comments: Array<string>;
}
export interface PostType {
  newPost: SinglePost;
}

export interface UpdateType {
  post_id: string;
  fieldToUpdate: string;
  newValue: string | any;
}

//same with SinglePost, but ? is added. Beacuse if it wasn't edited, it should be not exist in the props, except for post_id.
export interface updatePostProps {
  postId: string;
  title?: string;
  writer?: string;
  content?: string;
  comments?: Array<string>;
}

export interface createPostProps {
  postId?: string;
  title: string;
  writer?: string;
  nickname?: string;
  content: string;
  comments?: Array<string>;
}

export interface CreatePostType {
  newPost: createPostProps;
}

/** comment  */

export interface CommentType {
  commentId?: string;
  writer?: string;
  nickname?: string;
  msg: string;
}

export interface NewCommentProps {
  post_id: string;
  newComment: CommentType;
}

export interface EditCommentProps {
  post_id: string;
  comment_id: string;
  newMsg: string;
}
