import PostModel from "../../db/schemas/Post";

import {
  CreatePostType,
  EditCommentProps,
  NewCommentProps,
  UpdateType,
} from "../../utils/types";
class Post {
  static async FindByPostId(id: string) {
    const targetPost = await PostModel.findOne({ postId: id });
    return targetPost;
  }
  static async FindByUserId(user_id: string) {
    const postlist = await PostModel.find({ writer: user_id });
    return postlist;
  }

  static async CreatePost({ newPost }: CreatePostType) {
    //console.log("[md/CreatePost](1) newPost", newPost);
    const createdPost = await PostModel.create(newPost);
    //console.log("[md/CreatePost](2) createdPost", createdPost);
    return createdPost;
  }

  static async Update({ post_id, fieldToUpdate, newValue }: UpdateType) {
    const filter = { postId: post_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedPost = await PostModel.findOneAndUpdate(
      filter,
      update,
      option
    );

    return updatedPost;
  }
  static async GetAllPosts() {
    const postlist = await PostModel.find();
    return postlist;
  }

  static async CreateComment({ post_id, newComment }: NewCommentProps) {
    const post = await PostModel.findOne({ postId: post_id });
    if (post) {
      post?.comments.push(newComment);
      try {
        await post.save();
        console.log("[INFO] 코멘트가 등록되었습니다.");
        return true;
      } catch (err) {
        console.log("코멘트가 등록되지 않았습니다.");
      }
    }
  }

  static async UpdateComment({
    post_id,
    comment_id,
    newMsg,
  }: EditCommentProps) {
    const post = await PostModel.findOne({ postId: post_id });
    let comment;
    if (post) {
      comment = post.comments.id(comment_id);
      if (comment) {
        comment.msg = newMsg;
        try {
          await post.save();
          console.log("[INFO] 코멘트가 수정되었습니다.");
        } catch (err) {
          console.log("코멘트 수정에 실패하였습니다.");
        }
      }
    }
  }

  static async DeleteByPostId(post_id: string) {
    let res = false;
    await PostModel.deleteOne({ postId: post_id })
      .then(() => (res = true))
      .catch((err) => {
        console.log(err);
      });

    return res;
  }
}

export default Post;
