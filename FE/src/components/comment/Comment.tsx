import { MyComment } from "@/lib";
import { Form } from "react-router-dom";
import { useState } from "react";
import { SubmitButton } from "@/components/buttons/Buttons";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/loginState";
interface CmtList {
  comments: MyComment[];
  isShow: boolean;
  post_id: string;
}
import "./comment.css";
import { api_createComment } from "@/api/API";
const Comments = ({ comments, isShow, post_id }: CmtList) => {
  const [content, setContent] = useState<string>("");
  const [isOverLimit, setIsOverLimit] = useState<boolean>(false);
  const loginData = useRecoilValue(loginState);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newContent = e.target.value;
    if (newContent.length > 300) {
      setIsOverLimit(true);
    } else {
      setIsOverLimit(false);
      setContent(newContent);
    }
  };
  console.log("[comments/data] :", comments);

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const recoilToken = loginData.token;
      console.log(content, recoilToken);
      const res = await api_createComment(post_id, content, recoilToken);
      console.log("[comment] post성공");
      setContent("");
      toast.success("성공적으로 게시되었습니다!", { autoClose: 1600 });
    } catch (err) {
      console.log(err);
      toast.error(`에러 발생! ${err}`);
    }
  };
  if (comments.length == 0) {
    return (
      <>
        {isShow ? (
          <Form className="space-y-6" onSubmit={handleComment}>
            <div className="mt-1" id="comment-box">
              <textarea
                id="comment-textarea"
                name="comment"
                required
                className="block w-full my-1 rounded-md border-0 p-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:blue-300 sm:text-sm sm:leading-6"
                value={content}
                maxLength={300}
                onChange={handleContent}
              />
              <SubmitButton text="댓글 남기기" id="comment-submit" />
              <p
                className={`text-red-600 ${
                  isOverLimit ? "" : "invisible"
                } text-right`}
                id="comment-limit"
              >
                300자 이상을 적을 수 없습니다
              </p>
            </div>
          </Form>
        ) : (
          <></>
        )}
      </>
    );
  }

  return (
    <>
      {!isShow ? (
        <div
          className="w-full flex flex-col  lg:p-1 min-h-18"
          id="comment-container"
        >
          {comments.map((comment, idx) => (
            <div key={idx} className="single-comment-container">
              <div className="comment-top">
                <h3 className="comment-writer">{comment.nickname}</h3>
                <p className="comment-timestamp">{`${new Date(
                  comment.createdAt
                ).getFullYear()}-${(
                  "0" +
                  (new Date(comment.createdAt).getMonth() + 1)
                ).slice(-2)}-${(
                  "0" + new Date(comment.createdAt).getDate()
                ).slice(-2)}`}</p>
              </div>
              <div className="comment-down">
                <p className="comment-msg">{comment.msg}</p>
                <p className="comment-d-box">삭제</p>
              </div>
            </div>
          ))}
          <Form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleComment}
          >
            <div className="mt-1" id="comment-box">
              <textarea
                id="comment-textarea"
                name="comment"
                required
                className="block w-full my-1 rounded-md border-0 p-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:blue-300 sm:text-sm sm:leading-6"
                value={content}
                maxLength={300}
                onChange={handleContent}
              />
              <SubmitButton text="댓글 남기기" id="comment-submit" />
              <p
                className={`text-red-600 ${
                  isOverLimit ? "" : "invisible"
                } text-right`}
                id="comment-limit"
              >
                300자 이상을 적을 수 없습니다
              </p>
            </div>
          </Form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Comments;
