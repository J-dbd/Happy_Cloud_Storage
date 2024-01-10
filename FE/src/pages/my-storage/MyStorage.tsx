import BoardData from "@/lib/boardData";
import "./mystorage.css";
import { Post } from "@/lib";

import { useEffect, useState } from "react";
import Loading from "@/components/loading/Loading";

//for React Lazy
import PostForm from "@/components/postForm/PostForm";
import PostList from "@/components/postList/PostList";

const MyStroage = () => {
  //TODO: 게시글 정보 받아오기
  //let boardData: Post[];
  //boardData = BoardData;

  const [boardData, setBoardData] = useState<Post[] | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await BoardData;
      const globalData = data.filter((d) => d.type == 1);
      setBoardData(globalData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="board-page-container">
      <section className="postform-container">
        <div
          className="w-3/5 h-full max-h-60 p-1 mx-auto bg-white-100 rounded-md shadow-md dark:bg-gray-900 overflow-auto sm:w-2/5 sm:h-4/5 lg:w-3/5 lg:h-full"
          id="box-container"
        >
          <div className="w-full flex min-h-full flex-col justify-center  lg:p-1">
            <PostForm />
          </div>
        </div>
      </section>
      <PostList postData={boardData} />
    </div>
  );
};

export default MyStroage;
