import { Request, Response, NextFunction } from "express";

const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 오류에 따른 HTTP 상태 코드 설정. 기본값은 500.
  const statusCode = err.statusCode || 500;

  console.error(err.name, err.message);

  // 오류 응답 전송
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message: err.message,
  });

  next();
};

export default errorHandler;
