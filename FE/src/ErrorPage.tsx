import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("[Error] : ", error);

  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error("[Error/UnKnown] :", error);
    errorMessage = "Unknown error";
  }

  return (
    <>
      <div id="error-page">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            {/* <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </figure>
          <div className="card-body items-center text-center">
            <h2
              className="card-title"
              style={{ fontFamily: "Saira Stencil One" }}
            >
              Error!
            </h2>
            <p style={{ marginBottom: "20px", marginTop: "10px" }}>
              {errorMessage}
            </p>
            <div className="card-actions">
              <button className="btn btn-neutral">돌아가기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
