import "./globalstorage.css";
import { Post } from "@/lib";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/loginState";

import Loading from "@/components/loading/Loading";
import PostForm from "@/components/postForm/PostForm";
import PostList from "@/components/postList/PostList";

import { api_getPostList } from "@/api/API";

const GlobalStorage = () => {
  const [boardData, setBoardData] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const loginData = useRecoilValue(loginState);

  const fetchData = async () => {
    const recoilToken = loginData.token;
    await api_getPostList(0, recoilToken)
      .then((res) => {
        let globalData = res.data;
        globalData = globalData.reverse();
        setBoardData(globalData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("board data의 변화 감지");
  //   console.log("boardData", boardData);
  //   //fetchData();
  // }, [boardData]);

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
            <PostForm setBoardData={setBoardData} />
          </div>
        </div>
      </section>
      <PostList postData={boardData} setBoardData={setBoardData} />
    </div>
  );
};

export default GlobalStorage;
