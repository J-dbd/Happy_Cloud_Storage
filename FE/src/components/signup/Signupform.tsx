import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const SignUpHtmlForm = () => {
  let newInputEmail: string | null | undefined;

  let existingEmails = ["test@test.com", "test1@test.com", "test2@test.com"];

  /**
   * TODO: 컴포넌트가 랜더링될 때 미리 통신하여 현재 가입되어있는 이메일 목록을 받아두면 좋을 것 같다. 그런데 이 컴포넌트에서 받는 건 불필요해보이고 이 위 page단에서 정보를 처리하고 넘겨받는 것이 좋을 듯 보임.
   *
   * 통신은 page 단에서 최대한 처리하고 안되면 이제 따로 빼둔 컴포넌트들을 합치기로.
   *
   */
  const checkingDoubleEmails = () => {
    if (existingEmails.some((email) => email === newInputEmail)) {
      //console.log("fail");
      toast.error("이미 등록되어있는 이메일입니다.");
    } else {
      //console.log("succ");
      toast.success("사용 가능한 이메일입니다.");
    }
  };

  const checkingEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    newInputEmail = e.target.value;
    //TODO: 이메일 형식을 체크하는 기능 추가
  };

  const checkingPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputpwd = e.target.value;
    //TODO: 비밀번호 형식을 체크하는 기능 추가
  };
  return (
    <>
      <Form className="text-left space-y-4 md:space-y-6" action="#">
        {/* email */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              이메일
            </label>
            <label
              htmlFor="checking double email"
              className="text-sm font-medium text-gray-500 dark:text-gray-300 cursor-pointer hover:text-blue-300"
              onClick={checkingDoubleEmails}
            >
              중복 확인
            </label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required={true}
            onChange={checkingEmail}
          />
        </div>
        {/* nickname */}
        <div>
          <label
            htmlFor="nickname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            별명(닉네임)
          </label>
          <input
            type="nickname"
            name="nickname"
            id="nickname"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="닉네임을 지어주세요"
            required={true}
          />
        </div>
        {/* password */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            비밀번호
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required={true}
          />
        </div>
        {/* confirm password */}
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            비밀번호 확인
          </label>
          <input
            type="confirm-password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required={true}
          />
        </div>

        <button
          type="submit"
          className="w-full text-black bg-blue-200 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-200 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          회원 가입하기
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          이미 계정이 있나요?{" "}
          <Link
            to={`../login`}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            로그인하기
          </Link>
        </p>
      </Form>
    </>
  );
};

export default SignUpHtmlForm;
