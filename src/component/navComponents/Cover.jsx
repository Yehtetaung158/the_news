import React from "react";
import Logo from "../ui/Logo";

const Cover = () => {
  return (
    <>
      <div className="flex justify-between px-2 py-2 dark:bg-gray-900 border-b-2 border-black">
        <div>
          <h1 className=" items-center bg-black text-white px-2 py-1">
            Newspaper
          </h1>
        </div>
        <div>
          <Logo/>
        </div>
        <div className=" flex items-center">Weather</div>
      </div>
      <div className=" fixed top-0 bg-white w-full h-screen dark:bg-gray-600 -z-10">
      </div>
    </>
  );
};

export default Cover;
