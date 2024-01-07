import { Form } from "react-router-dom";
import "./loginform.css";
import HCSLogo from "/HCS_logo.svg";

const LoginForm = () => {
  //max-w-4xl
  return (
    <>
      <div
        className="w-2/5 h-3/4 p-1 mx-auto bg-white-100 rounded-md shadow-md dark:bg-gray-900 mt-20"
        id="lf-box"
      >
        <div className="w-full flex min-h-full flex-col justify-center px-6 py-1 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img class= src={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"} alt="Your Company"> */}
            <img
              src={HCSLogo}
              alt="Happy Cloud Storage Logo"
              className="mx-auto h-20 w-auto"
            />
            HCS에 로그인하기
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
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
                회원이 아니신가요?
                <br />
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  회원가입하기
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
