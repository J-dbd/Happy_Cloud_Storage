import { Router } from "express";
import postServices from "../services/postService";
import { login_required } from "../middlewares/login_requires";

const postRouter = Router();

// Request 타입 확장
declare module "express-serve-static-core" {
  interface Request {
    currentUserId?: string;
  }
}

postRouter.post("/post/new", login_required, async function (req, res, next) {
  try {
    //console.log("req의 body?", req.body);
    if (Object.keys(req.body).length === 0) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const user_id = req.currentUserId;
    const { title, content } = req.body;
    const reqData = { title, content };
    let newPost = null;

    if (user_id) {
      newPost = await postServices.createPost(user_id, reqData);
    }
    if (!newPost) {
      throw new Error("post 실패");
    }
    //console.log("newPost 리턴될 최후의...", newPost);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
});

postRouter.put("/post/update", login_required, async function (req, res, next) {
  try {
    if (Object.keys(req.body).length === 0) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const { postId, title, content } = req.body;
    const reqData = { postId, title, content };

    const updatedPost = await postServices.updatePost(reqData);

    if (typeof updatedPost === "string") {
      throw new Error(updatedPost);
    }

    res.status(201).json(updatedPost);
  } catch (err) {
    next(err);
  }
});

postRouter.get(
  "/post/my-storage",
  login_required,
  async function (req, res, next) {
    try {
      //get user id from req.params
      const user_id = req.currentUserId;
      //console.log("[PR] user_id", user_id);
      let postList = null;

      if (user_id != undefined) {
        postList = await postServices.getPostByUserId(user_id);
      }

      if (postList == null || postList == undefined) {
        throw new Error("[PR] my postlist is null or undefined!");
      }
      //console.log("[PR] postList", postList);
      res.status(200).send(postList);
    } catch (err) {
      next(err);
    }
  }
);

postRouter.get(
  "/post/global-storage",
  login_required,
  async function (req, res, next) {
    try {
      //get user id from req.params
      const user_id = req.currentUserId;
      let postList = null;

      if (user_id != undefined) {
        postList = await postServices.getGlobalPost();
      }

      if (postList == null || postList == undefined) {
        throw new Error("[PR] global postlist is null or undefined!");
      }

      res.status(200).send(postList);
    } catch (err) {
      next(err);
    }
  }
);
postRouter.put("/post/delete", login_required, async function (req, res, next) {
  try {
    if (Object.keys(req.body).length === 0) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }
    // 현재 user id
    const user_id = req.currentUserId;
    if (user_id == undefined) {
      throw new Error("[comment/put] req.currentId issue");
    }

    const { post_id } = req.body;

    const deledtedPost = await postServices.DeletePost(post_id, user_id);

    if (typeof deledtedPost === "string") {
      throw new Error(deledtedPost);
    }

    console.log("deledtedPost", deledtedPost);
    res.status(201).json(deledtedPost);
  } catch (err) {
    next(err);
  }
});
export { postRouter };

/** comment */
postRouter.post(
  "/comment/new",
  login_required,
  async function (req, res, next) {
    try {
      if (Object.keys(req.body).length === 0) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }
      //writer는 현재 로그인한 유저일 것

      const user_id = req.currentUserId;
      if (user_id == undefined) {
        throw new Error("[comment/post] req.currentId issue");
      }
      const writer = user_id;
      //const post_id = req.params.id;
      console.log("??", req.body);
      const { post_id, msg } = req.body;

      const newComment = { msg };

      //console.log("[PR]", writer, post_id, newComment);
      const newCmt = await postServices.AddComment(writer, post_id, newComment);

      if (!newCmt) {
        throw new Error("comment 생성 실패");
      }

      res.status(201).json(newCmt);
    } catch (err) {
      next(err);
    }
  }
);

postRouter.put(
  "/comment/delete",
  login_required,
  async function (req, res, next) {
    try {
      if (Object.keys(req.body).length === 0) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }
      // 현재 user id
      const user_id = req.currentUserId;
      if (user_id == undefined) {
        throw new Error("[comment/put] req.currentId issue");
      }

      const { post_id, comment_id } = req.body;
      //the post with updated comment list
      const deledtedPost = await postServices.DeleteComment(
        user_id,
        post_id,
        comment_id
      );

      if (typeof deledtedPost === "string") {
        throw new Error(deledtedPost);
      }

      res.status(201).json(deledtedPost);
    } catch (err) {
      next(err);
    }
  }
);

postRouter.get(
  "/comment/list",
  login_required,
  async function (req, res, next) {
    try {
      if (Object.keys(req.body).length === 0) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }

      // 현재 user id
      const user_id = req.currentUserId;
      if (user_id == undefined) {
        throw new Error("[comment/put] req.currentId issue");
      }

      const post_id = req.params.post_id;

      const post = await postServices.getPost(post_id);

      if (post) {
        res.status(201).json(post.comments);
      }
    } catch (err) {
      next(err);
    }
  }
);
