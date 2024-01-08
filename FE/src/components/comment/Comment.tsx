import { MyComment } from "@/lib";
import { Form } from "react-router-dom";
import { useState } from "react";
import { SubmitButton } from "@/components/buttons/Buttons";
interface CmtList {
  comments: MyComment[];
  isShow: boolean;
}
import "./comment.css";
const Comments = ({ comments, isShow }: CmtList) => {
  const [content, setContent] = useState<string>("");
  const [isOverLimit, setIsOverLimit] = useState<boolean>(false);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newContent = e.target.value;
    if (newContent.length > 300) {
      setIsOverLimit(true);
    } else {
      setIsOverLimit(false);
      setContent(newContent);
    }
  };
  console.log(comments);
  if (comments.length == 0) {
    return (
      <>
        {isShow ? (
          <Form className="space-y-6" action="#" method="POST">
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
                <h3 className="comment-writer">{comment.writer}</h3>
                <p className="comment-timestamp">
                  {new Date(comment.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="comment-down">
                <p className="comment-msg">{comment.msg}</p>
                <p className="comment-down">삭제</p>
              </div>
            </div>
          ))}
          <Form className="space-y-6" action="#" method="POST">
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
