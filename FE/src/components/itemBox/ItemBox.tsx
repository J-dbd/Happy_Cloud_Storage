/* post와 댓글의 기본 배경 틀 */
import { useEffect, useState } from "react";
import { Post } from "@/lib";
import "./itemBox.css";
import commnetBox from "/comment.svg";
import Comments from "@/components/comment/Comment";

interface PostProp {
  //key: number;
  post: Post;
  onEditClick: (id: string) => void;
  onDeleteClick: (post_id: string) => void;
}
const ItemBox = ({ post, onEditClick, onDeleteClick }: PostProp) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const createdAt = post.createdAt;
  const date = new Date(createdAt);
  date.setHours(date.getHours() + 9);
  const cnvDate = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
    -2
  )}-${("0" + date.getDate()).slice(-2)}`;

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
        <div
          id="post-box-in"
          className="w-full p-2 flex min-h-full flex-col  lg:p-1"
        >
          <div className="flex flex-row pt-2" id="post-container">
            <h1 id="post-title">{post.title}</h1>
            <p id="post-wd">
              <span>{post.nickname} </span>
            </p>

            <p id="post-wd">
              <time>{cnvDate}</time>
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
              <img src={commnetBox} alt="comment box" />
            </p>
            <p id="post-ed" onClick={() => onEditClick(post.postId)}>
              수정
            </p>
            <p id="post-ed" onClick={() => onDeleteClick(post.postId)}>
              삭제
            </p>
          </div>
          <Comments
            comments={post.comments}
            isShow={isShow}
            post_id={post.postId}
          />
        </div>
      </article>
    </>
  );
};

export default ItemBox;
