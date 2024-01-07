import SignUpForm from "@/components/signup/Signupform";
import "./signup.css";
import HCSLogo from "/HCS_logo.svg";
import GoBack from "@/components/buttons/GoBack";
import { ToastContainer } from "react-toastify";

const SignUp = () => {
  return (
    <>
      <div
        className="w-full h-full p-1 mx-auto bg-white-100 rounded-md shadow-md dark:bg-gray-900 mt-10 overflow-auto sm:w-3/5 sm:h-full lg:w-3/5 lg:h-full"
        id="lf-box"
      >
        {/* login form component */}
        <div className="w-full flex min-h-full flex-col justify-center px-6 py-1 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img class= src={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"} alt="Your Company"> */}
            <img
              src={HCSLogo}
              alt="Happy Cloud Storage Logo"
              className="mx-auto h-20 w-auto"
            />
            회원가입
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <SignUpForm />

              <GoBack />
            </div>
          </div>
          {/* SignUp Modal Component */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default SignUp;
