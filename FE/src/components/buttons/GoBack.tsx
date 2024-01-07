import { useNavigate } from "react-router-dom";
import "./goBack.css";

// 뒤로가기
// 특정링크
const GoBack = () => {
  let history = useNavigate();
  return (
    <>
      {/* tawilwind's btn */}
      {/* <button
        className="flex w-full justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        onClick={() => history(-1)}
      >
        뒤로가기
      </button> */}
      <button className="backButton" onClick={() => history(-1)}>
        뒤로가기
      </button>
    </>
  );
};

export default GoBack;
