import { BoardData } from "@/lib/boardData";
import "./mystorage.css";
import { Post } from "@/lib";
import PostList from "@/components/postList/PostList";
const MyStroage = () => {
  //TODO: 나의 게시글 정보 받아오기
  let boardData: Post[];
  boardData = BoardData;

  return (
    <div className="board-page-container">
      <section className="board-bar">
        <div className="post-container">글적는곳</div>
      </section>
      <PostList boardData={boardData} />
    </div>
  );
};

export default MyStroage;
