import User from "../db/model/User";
import bcyrpt from "bcrypt";
import { UserProps, UserType } from "../utils/types";
import env from "../utils/validateEnv";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { UserUpdateProps } from "../utils/types";

class userAuthService {
  // If email is already exist, return true.
  // It will be checked before ...
  static async checkEmail(inputemail: string) {
    const existedUser = await User.findByEmailOrNick({ email: inputemail });
    if (existedUser) {
      return true;
    } else {
      return false;
    }
  }

  static async addUser({ email, password, nickname }: UserType) {
    const user = await User.findByEmailOrNick({ email: email });
    /**check email again */
    if (user) {
      const errormsg = "이메일 중복 체크를 진행해주세요.";
      return { errormsg };
    }

    //hash password
    const hashedPwd = await bcyrpt.hash(password, 10);

    //make userId by uuid
    const userId = uuidv4();

    // save in db
    const newUser = {
      userId: userId,
      email: email,
      password: hashedPwd,
      nickname: nickname,
    };

    const createdNewUser: UserProps = await User.create({ newUser });
    createdNewUser.errormsg = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.(ts라서 구현 이슈 가능성)

    return createdNewUser;
  }

  static async getUser({ email, password }: UserType) {
    // check email db
    const user = await User.findByEmailOrNick({ email: email });
    if (!user) {
      const errorMsg =
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMsg };
    }

    // check password
    const hasehdExistPwd = user.password;
    const isCorrectPwd = bcyrpt.compare(password, hasehdExistPwd);
    if (!isCorrectPwd) {
      const errorMsg = "비밀번호가 일치하지 않습니다. 다시 확인해주세요.";
      return { errorMsg };
    }

    //login success, create JWT web Token

    const secreteKey = env.JWT_SECRET_KEY;
    const token = jwt.sign({ user_id: user.userId }, secreteKey);

    //setting loginUser for return

    const id = user.userId;
    const nickname = user.nickname;

    const loginUser = {
      token,
      id,
      nickname,
      errorMsg: null,
    };

    return loginUser;
  }

  //get all users
  static async getUsers() {
    const users = await User.findAll();
    return users;
  }
  //get a user
  static async getUserByUserId(user_id: string) {
    const user = await User.findByUserId(user_id);
    return user;
  }

  static async setUser({ user_id, toUpdate }: UserUpdateProps) {
    let user = await User.findByUserId(user_id);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage = "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    if (toUpdate.nickname) {
      const id = user_id;
      const fieldToUpdate = "name";
      const newValue = toUpdate.nickname;
      user = await User.Update({ id, fieldToUpdate, newValue });
    }

    if (toUpdate.email) {
      const id = user_id;
      const fieldToUpdate = "email";
      const newValue = toUpdate.email;
      user = await User.Update({ id, fieldToUpdate, newValue });
    }

    if (toUpdate.password) {
      const id = user_id;
      const fieldToUpdate = "password";
      const newValue = await bcyrpt.hash(toUpdate.password, 10);
      user = await User.Update({ id, fieldToUpdate, newValue });
    }

    return user;
  }

  static async getUserInfo(user_id: string) {
    const user = await User.findByUserId(user_id);

    if (!user) {
      const errormsg =
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errormsg };
    }

    return user;
  }
}

export default userAuthService;
