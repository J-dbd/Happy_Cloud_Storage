/* post와 댓글의 기본 배경 틀 */
import { Post } from "@/lib";
import "./itemBox.css";
interface PostProp {
  key: number;
  post: Post;
}
const ItemBox = ({ key, post }: PostProp) => {
  return (
    <>
      <article
        className="w-3/5 h-full max-h-40 p-1 mx-auto bg-white-100 rounded-md shadow-md dark:bg-gray-900 overflow-auto sm:w-2/5 sm:h-4/5 lg:w-3/5 lg:h-full"
        id="ltem-box"
      >
        <div className="w-full flex min-h-full flex-col justify-center  lg:p-1">
          <div className="flex flex-row items-center" id="post-container">
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
        </div>
      </article>
    </>
  );
};

export default ItemBox;
