import { Schema, model } from "mongoose";

/**  subdocument of Posts */
const CommentSchema = new Schema(
  {
    commentId: { type: String },
    writer: { type: String },
    nickname: { type: String },
    msg: { type: String, required: true },
  },
  { timestamps: true }
);

const PostSchema = new Schema(
  {
    postId: { type: String, required: true },
    title: { type: String, required: true },
    writer: { type: String },
    nickname: { type: String },
    content: { type: String, required: true },
    comments: { type: [CommentSchema], default: [] },
  },
  { timestamps: true }
);

const PostModel = model("PostHCS", PostSchema);
export default PostModel;
