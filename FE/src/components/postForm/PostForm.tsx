import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { SubmitButton } from "@/components/buttons/Buttons";

import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/loginState";
import { api_createNewPost } from "@/api/API";

import { toast } from "react-toastify";
import Loading from "@/components/loading/Loading";
interface ExistContent {
  fetchData?: () => void;
  existTitle?: string;
  existContent?: string;
}
const PostForm = ({ fetchData, existTitle, existContent }: ExistContent) => {
  const initalizeTitle = existTitle ? existTitle : "";
  const initializeContent = existContent ? existContent : "";

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isOverLimit, setIsOverLimit] = useState<boolean>(false);
  const loginData = useRecoilValue(loginState);
  const [loading, setLoading] = useState<boolean>(false);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newContent = e.target.value;
    if (newContent.length > 300) {
      setIsOverLimit(true);
    } else {
      setIsOverLimit(false);
      setContent(newContent);
    }
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTitle = e.target.value;
    setTitle(newTitle);
  };

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const recoilToken = loginData.token;
      console.log(title, content, recoilToken);
      const res = await api_createNewPost({ title, content }, recoilToken);
      console.log("[PostF] post성공");
      setTitle("");
      setContent("");
      toast.success("성공적으로 게시되었습니다!", { autoClose: 1600 });
      fetchData?.();
    } catch (err) {
      console.log(err);
      toast.error(`에러 발생! ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (existTitle) setTitle(existTitle);
    if (existContent) setContent(existContent);
  }, [existTitle, existContent]);

  return (
    <>
      <Form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={handlePost}
      >
        {/* <form className="space-y-6" action="#" method="POST"> */}
        {loading && <Loading />}

        <div>
          <div className="mt-2">
            <input
              id="postTitle"
              name="title"
              type="text"
              placeholder="제목"
              required
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:blue-300 sm:text-sm sm:leading-6"
              value={title}
              onChange={handleTitle}
            />
            <textarea
              id="content"
              name="content"
              placeholder="행복한 순간을 기록해보세요"
              required
              className="block w-full my-1 rounded-md border-0 p-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:blue-300 sm:text-sm sm:leading-6"
              value={content}
              maxLength={300}
              onChange={handleContent}
            />
            <p
              className={`text-red-600 ${
                isOverLimit ? "" : "invisible"
              } text-right`}
            >
              300자 이상을 적을 수 없습니다
            </p>
          </div>
        </div>
        <SubmitButton text="SnapShot 남기기" />
      </Form>
    </>
  );
};

export default PostForm;
