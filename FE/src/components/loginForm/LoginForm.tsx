import { Form, Link } from "react-router-dom";
import "./loginform.css";
import { SubmitButton } from "@/components/buttons/Buttons";

const LoginForm = () => {
  //let history = useNavigate();
  //max-w-4xl

  const OpenModal = () => {
    let modalElement = document.getElementById("x-modal");
    if (modalElement) {
      (modalElement as HTMLDialogElement).showModal();
    }
  };

  return (
    <>
      <Form className="space-y-6" action="#" method="POST">
        {/* <form className="space-y-6" action="#" method="POST"> */}
        <div>
          <label
            htmlFor="email"
            className="text-left block text-sm font-medium leading-6 text-gray-900"
          >
            이메일
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="example@example.com"
              required
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              비밀번호
            </label>
            <div className="text-sm">
              <p
                className="font-semibold text-blue-500 hover:text-blue-300"
                onClick={OpenModal}
              >
                비밀번호 찾기
              </p>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder=""
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <SubmitButton text="로그인" />
        </div>
      </Form>

      <p className="mt-2 text-center text-sm text-gray-500">
        회원이 아니신가요?{`   `}
        <Link
          to={`../signUp`}
          className="font-semibold leading-6 text-blue-300 hover:text-yellow-500"
        >
          회원가입하기
        </Link>
      </p>

      {/* Find Password Modal Component */}
      <dialog id="x-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">비밀번호 찾기</h3>
          <p className="py-4">가입 시 사용한 이메일을 기입해주세요.</p>
          <Form className="space-y-6" action="#" method="POST">
            <div className="mt-2">
              <input
                id="emailForFinding"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="example@example.com"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <SubmitButton text="임시 비밀번호 발급받기" />
            </div>
          </Form>
        </div>
      </dialog>
    </>
  );
};

export default LoginForm;
