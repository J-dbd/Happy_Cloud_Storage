/** 작성한 글 리스트를 보여주는 component  */
import ItemBox from "@/components/itemBox/ItemBox";
import { Post } from "@/lib";
import { useEffect, useRef, useState } from "react";

import PostForm from "@/components/postForm/PostForm";
interface PostListProps {
  postData: Post[] | null;
}

const PostList = ({ postData }: PostListProps) => {
  /** States for Infinit Scroll */

  const initialPostData = postData ? [...postData.slice(0, 3)] : [];
  const [postlist, setPostList] = useState<Post[]>(initialPostData);
  const [page, setPage] = useState<number>(0);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const [selectedPost, setSelectPost] = useState<Post | null>(null);

  /** Infinit scrolling */
  const loader = useRef(null);
  const handleObserver: IntersectionObserverCallback = (entities) => {
    const target = entities[0];
    if (postData && target.isIntersecting) {
      // 게시글이 더 있는지 확인
      if ((page + 1) * 3 < postData.length) {
        const additionalData = postData.slice(
          (page + 1) * 3,
          Math.min((page + 2) * 3, postData.length)
        );
        setPostList((prev) => [...prev, ...additionalData]);
        setPage((prv) => prv + 1);
      } else {
        setIsEnd(true);
      }
    }
  };

  /** checker */
  // useEffect(() => {
  //   console.log("[1] postlist.length", postlist.length);
  //   console.log("[2] page", page);
  //   console.log("[3] IsEnd? ", isEnd);
  // }, [postlist, isEnd, page, postData.length]);

  /* checking infinite scrolling by asynchronously */
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current);
    }
    // Clean up: 게시글이 더 이상 없는 경우 observer 해제
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [page, isEnd]);

  const OpenModal = () => {
    let modalElement = document.getElementById("x-modal");
    if (modalElement) {
      (modalElement as HTMLDialogElement).showModal();
    }
  };

  const handleEdit = (id: number) => {
    let targetPost = postlist.find((post) => id === post.id);
    if (targetPost) {
      setSelectPost(targetPost);
    } else {
      console.log("[ERROR] PostList");
    }
  };

  useEffect(() => {
    if (selectedPost) {
      OpenModal();
      //setIsModalOpen(false); // 모달이 열린 후 상태 초기화
    }
  }, [selectedPost]);

  console.log("[PL/data]", postlist);

  return (
    <>
      <section className="board">
        {postlist.map((data) => (
          <ItemBox key={data.id} post={data} onEditClick={handleEdit} />
        ))}
        {isEnd ? (
          <>
            <div>
              <h2>포스트가 존재하지 않습니다</h2>
            </div>
          </>
        ) : (
          <div className="loading" ref={loader}>
            <h2>로딩중...</h2>
          </div>
        )}
      </section>

      {/* Editing Modal Component */}
      <dialog id="x-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setSelectPost(null)}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">수정하기</h3>
          테스트중입니다
          {selectedPost && (
            <PostForm
              existTitle={selectedPost.title}
              existContent={selectedPost.content}
            />
          )}
        </div>
      </dialog>
    </>
  );
};

export default PostList;
