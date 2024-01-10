/* post와 댓글의 기본 배경 틀 */
import { useEffect, useState } from "react";
import { Post } from "@/lib";
import "./itemBox.css";
import Comments from "@/components/comment/Comment";
interface PostProp {
  //key: number;
  post: Post;
  onEditClick: (id: number) => void;
}
const ItemBox = ({ post, onEditClick }: PostProp) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    if (post.comments.length !== 0) {
      setIsShow(true);
    }
  }, []);
  return (
    <>
      <article
        className="w-3/5 min-h-40 p-1 mx-auto bg-white-100 rounded-md shadow-md dark:bg-gray-900 sm:w-2/5  lg:w-3/5"
        id="box-container"
      >
        <div className="w-full flex min-h-full flex-col  lg:p-1">
          <div className="flex flex-row pt-2" id="post-container">
            <h1 id="post-title">{post.title}</h1>
            <p id="post-wd">
              작성자: <span>{post.writer} </span>
            </p>

            <p id="post-wd">
              작성일: <time>{post.timestamp}</time>
            </p>
          </div>
          <div
            className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm lg:mx-2"
            id="post-content"
          >
            {post.content}
          </div>
          <div className="flex flex-row pt-2" id="post-edcontainer">
            <p id="post-comment" onClick={() => setIsShow((prev) => !prev)}>
              댓글
            </p>
            <p id="post-ed" onClick={() => onEditClick(post.id)}>
              수정하기
            </p>
            <p id="post-ed">삭제</p>
          </div>
          <Comments comments={post.comments} isShow={isShow} />
        </div>
      </article>
    </>
  );
};

export default ItemBox;
