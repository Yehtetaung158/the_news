import React from "react";

const Error = ({refetch}) => {
    const reFetchHandler = () => {
        refetch()
      };
  return (
    <>
      <div className="  w-[250px] h-screen mx-auto my-auto flex flex-col items-center justify-center">
        <div className="bg-gray-300 flex flex-col gap-2 items-center justify-center rounded-lg py-2 px-2 ">
          <h1>Error</h1>
          <p>Somethings is wrong!</p>
          <button
            className=" flex gap-2 items-center justify-center"
            onClick={reFetchHandler}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </span>
            Reload
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
