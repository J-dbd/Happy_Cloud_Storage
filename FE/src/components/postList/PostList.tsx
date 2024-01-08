/** 작성한 글 리스트를 보여주는 component  */
import ItemBox from "@/components/itemBox/ItemBox";
import { Post } from "@/lib";
import { useEffect, useRef, useState } from "react";
interface PostListProps {
  boardData: Post[];
}

const PostList = ({ boardData }: PostListProps) => {
  /** States for Infinit Scroll */
  const [postlist, setPostList] = useState<Post[]>([...boardData.slice(0, 3)]);
  const [page, setPage] = useState<number>(0);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  /** Infinit scrolling */
  const loader = useRef(null);
  const handleObserver: IntersectionObserverCallback = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      // 게시글이 더 있는지 확인
      if ((page + 1) * 3 < boardData.length) {
        const additionalData = boardData.slice(
          (page + 1) * 3,
          Math.min((page + 2) * 3, boardData.length)
        );
        setPostList((prev) => [...prev, ...additionalData]);
        setPage((prv) => prv + 1);
      } else {
        setIsEnd(true);
      }
    }
  };

  /** checker */
  useEffect(() => {
    console.log("[1] postlist.length", postlist.length);
    console.log("[2] page", page);
    console.log("[3] IsEnd? ", isEnd);
  }, [postlist, isEnd, page, boardData.length]);

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

  return (
    <section className="board">
      {postlist.map((data, idx) => (
        //<article key={idx}>{data.title}</article>
        <ItemBox key={idx} post={data} />
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
  );
};

export default PostList;
