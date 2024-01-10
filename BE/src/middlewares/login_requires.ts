import jwt from "jsonwebtoken";
import env from "../utils/validateEnv";
import { Request, Response, NextFunction } from "express";

// Request 타입 확장
declare module "express-serve-static-core" {
  interface Request {
    currentUserId?: string;
  }
}

function login_required(req: Request, res: Response, next: NextFunction) {
  //console.log("[LG Req]", req);
  //get authorization bearer token from request header.
  const userToken = req.headers["authorization"]?.split(" ")[1] ?? "null";
  //console.log("[LG userToken]", userToken);
  /**
   * This token would e jwt token string or 'null' string,
   * if the token is null, services will be rejected which need the login_required.
   */
  if (userToken === "null") {
    console.log("Req for service, Authorization toekn is null");
    res.status(400).send("로그인한 유저만 사용할 수 있는 서비스입니다.");
    return;
  }

  /** checking valid token or not, get infor from valid token  */
  try {
    const secretKey = env.JWT_SECRET_KEY;
    const jwtDecoded = jwt.verify(userToken, secretKey) as jwt.JwtPayload;
    const user_id = jwtDecoded.user_id;
    req.currentUserId = user_id;
    //console.log("[LG currentUserId]", user_id);
    next();
  } catch (error) {
    res.status(400).send("정상적인 토큰이 아닙니다. 다시 한 번 확인해 주세요.");
    return;
  }
}

export { login_required };
