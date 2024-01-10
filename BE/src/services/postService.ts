import { CommentType, createPostProps, updatePostProps } from "../utils/types";
import Post from "../db/model/Post";
import { v4 as uuidv4 } from "uuid";
import User from "../db/model/User";

class postServices {
  /* UPDATEUpdate after checking  */
  static async updatePost(toUpdate: updatePostProps) {
    /* GET to check */
    const { postId } = toUpdate;
    let post = await Post.FindByPostId(postId);

    if (!post) {
      const errormsg = "post가 존재하지 않습니다.";
      return errormsg;
    }

    if (toUpdate.title) {
      const post_id = postId;
      const fieldToUpdate = "title";
      const newValue = toUpdate.title;
      post = await Post.Update({ post_id, fieldToUpdate, newValue });
    }

    if (toUpdate.content) {
      const post_id = postId;
      const fieldToUpdate = "content";
      const newValue = toUpdate.content;
      post = await Post.Update({ post_id, fieldToUpdate, newValue });
    }

    return post;
  }
  static async createPost(user_id: string, newInput: createPostProps) {
    //console.log("[service/createPost] (1) newInput: ", newInput);

    const user = await User.findByUserId(user_id);
    //console.log("[PS] user?", user);
    const post_id = uuidv4();
    newInput["postId"] = post_id;
    newInput["comments"] = [];
    (newInput["writer"] = user_id), (newInput["nickname"] = user?.nickname);

    const newPost = newInput;
    const createdNewPost = await Post.CreatePost({ newPost });
    //console.log("[PSCP](4) createdNewPost", createdNewPost);
    return createdNewPost;
  }

  /*  GET  */
  static async getPost(post_id: string) {
    const post = await Post.FindByPostId(post_id);
    return post;
  }

  static async getPostByUserId(user_id: string) {
    const postList = await Post.FindByUserId(user_id);
    console.log("[PS] postlist", postList);
    return postList;
  }

  static async getGlobalPost() {
    const postList = await Post.GetAllPosts();
    return postList;
  }

  /* for comment */

  //create comment
  static async AddComment(
    writer: string,
    post_id: string,
    newComment: CommentType
  ) {
    console.log(
      "[PS] writer, post_id, newcomment",
      writer,
      post_id,
      newComment
    );
    const user = await User.findByUserId(writer);
    const comment_id = uuidv4();
    newComment["commentId"] = comment_id;
    newComment["writer"] = writer;
    newComment["nickname"] = user?.nickname;
    const addedNC = await Post.CreateComment({
      post_id: post_id,
      newComment: newComment,
    });
    console.log("[PS] addedNC ", addedNC);
    return addedNC;
  }

  //update comment
  static async UpdateComment(
    post_id: string,
    comment_id: string,
    newMsg: string
  ) {
    await Post.UpdateComment({ post_id, comment_id, newMsg });
  }

  static async DeleteComment(
    userId: string,
    postId: string,
    commentId: string
  ) {
    const post = await Post.FindByPostId(postId);
    if (!post) {
      return "해당 post가 존재하지 않습니다.";
    }

    if (post.writer != userId) {
      return "현재 유저가 해당 코멘트의 작성자가 아닙니다.";
    }

    const commentIdx = post.comments.findIndex(
      (comment) => comment.commentId === commentId
    );

    if (commentIdx === -1) {
      return "해당 comment가 존재하지 않습니다. ";
    }

    post.comments.splice(commentIdx, 1);

    const updatedPost = await Post.Update({
      post_id: postId,
      fieldToUpdate: "comments",
      newValue: post.comments,
    });

    return updatedPost;
  }

  static async DeletePost(post_id: string, user_id: string) {
    const targetPost = await Post.FindByPostId(post_id);
    if (targetPost == null) {
      return "삭제할 post가 존재하지 않습니다!";
    }
    if (user_id !== targetPost?.writer) {
      return "글 작성자가 아닙니다!";
    }
    const deletedPost = await Post.DeleteByPostId(post_id);
    return deletedPost;
  }
}

export default postServices;
