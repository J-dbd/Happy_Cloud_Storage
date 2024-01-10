//for roulter
export interface Route {
  path: string;
  element: JSX.Element;
}

//for board

// export interface MyComment {
//   writer: string;
//   email: string;
//   msg: string;
//   timestamp: number;
// }
// export interface Post {
//   id: number;
//   title: string;
//   writer: string;
//   email: string;
//   content: string;
//   timestamp: number;
//   /**
//    * type 0: global
//    * type 1: private
//    */
//   type: number;
//   comments: MyComment[];
// }

export interface MyComment {
  commentId?: string;
  writer?: string;
  nickname?: string;
  msg: string;
  createdAt: string;
}
export interface Post {
  postId: string;
  title: string;
  writer: string;
  nickname: string;
  content: string;
  comments: Array<MyComment>;
  createdAt: string;
}

/** TYPES for API */
export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData extends LoginData {
  nickname: string;
}

export interface NewPostData {
  title: string;
  content: string;
}

export interface DeletePostData {
  post_id: string;
  token: string;
}

export interface UpdatePostData {
  postId: string;
  title: string;
  content: string;
}

export interface DeleteCommentData {
  post_id: string;
  comment_id: string;
}
