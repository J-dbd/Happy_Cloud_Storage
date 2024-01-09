import axios from "axios";
// import env from "@/utils/validateEnv";
import {
  DeleteCommentData,
  DeletePostData,
  LoginData,
  NewPostData,
  SignupData,
  UpdatePostData,
} from "@/lib";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN,
  headers: { "Content-Type": "application/json" },
});

/** intercept */

// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  function (res) {
    console.log("Res", res);
    // 요청이 전달되기 전에 작업 수행
    return res;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
instance.interceptors.response.use(
  function (response) {
    console.log("resp", response);
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

/** USER */

// login

export const api_login = async (data: LoginData) => {
  console.log(import.meta.env.VITE_API_DOMAIN);
  console.log("data", data);
  const body = data;
  const url = "user/login";

  return instance.post(url, body);
};
// signup
export const api_signUp = async (data: SignupData) => {
  const url = "user/register";

  return instance.post(url, data);
};

// get current user for checking
export const api_getCurrentUser = async () => {
  const url = "user/current";
  return instance.get(url);
};

/** POST */

// get posts
export const api_getPostList = async (type: number) => {
  let category = "";
  if (type == 1) {
    category = "my-storeage";
  } else if (type == 0) {
    category = "global-storage";
  }
  const url = `post/${category}`;
  return instance.get(url);
};

// create post
export const api_createNewPost = async (data: NewPostData) => {
  const url = "post/new";
  return instance.post(url, data);
};

// delete post
export const api_deletePost = async (data: DeletePostData) => {
  const url = "post/delete";
  return instance.put(url, data);
};

// update post
export const api_updatePost = async (data: UpdatePostData) => {
  const url = "post/update";
  return instance.put(url, data);
};

// create comment
export const api_createComment = async (post_id: string, msg: string) => {
  const url = post_id;
  return instance.post(url, msg);
};
// delete comment
export const api_deleteComment = async (data: DeleteCommentData) => {
  const url = "comment/delete";
  return instance.put(url, data);
};
