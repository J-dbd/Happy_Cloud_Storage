import { authService, userDbService } from "@/api/firebase_configs";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// 내 정보로 initialized된 auth
const auth = authService;
//회원가입하는 함수
const createNewUser = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`${user} is created!`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
    });
};

const SignInUser = (email: string, password: string) => {
  signInWithEmailAndPassword;
};
