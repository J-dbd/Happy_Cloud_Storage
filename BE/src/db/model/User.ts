/** handling CRUD for each models */

import UserModel from "../../db/schemas/User";
import { NewUser, SearchUserType, UpdatedProps } from "../../utils/types";

class User {
  // create
  static async create({ newUser }: NewUser) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }

  // serach by id(userId)
  static async findByUserId(id: string) {
    const user = UserModel.findOne({ userId: id });
    return user;
  }

  static async findByUserNickName(nickName: string) {
    const user = UserModel.findOne({ nickname: nickName });
    return user;
  }

  // serach by email or nickname
  static async findByEmailOrNick({ email, nickname }: SearchUserType) {
    let targetUser;
    if (email) {
      targetUser = await UserModel.findOne({ email: email });
    } else if (nickname) {
      targetUser = await UserModel.findOne({ nickname: nickname });
    }
    return targetUser;
  }
  static async findAll() {
    const users = await UserModel.find({});
    return users;
  }

  static async Update({ id, fieldToUpdate, newValue }: UpdatedProps) {
    //setting
    const filter = { userId: id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  }
}

export default User;
