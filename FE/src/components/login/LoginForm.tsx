import { Form, Link } from "react-router-dom";
import "./loginform.css";

const LoginForm = () => {
  //let history = useNavigate();
  //max-w-4xl
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
              <a
                href="#"
                className="font-semibold text-blue-500 hover:text-blue-300"
              >
                비밀번호 찾기
              </a>
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
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            로그인
          </button>
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
    </>
  );
};

export default LoginForm;
