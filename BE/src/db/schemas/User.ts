import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "형식에 맞는 이메일을 적어주세요.",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
});

const UserModel = model("UserHCS", UserSchema);

export default UserModel;
