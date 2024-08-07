import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DropDwon = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const mode = useSelector((state) => state.nav.mode);
  if (mode) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  return (
    <div className=" relative">
      <button
        className=" bg-gray-200 dark:bg-gray-600 py-2 px-1.5 rounded-lg"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        {!isDropDownOpen ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </>
        )}
      </button>
      <div
        className={` bg-gray-200 dark:bg-gray-600 dark:text-white flex-col  ${
          isDropDownOpen ? " absolute -bottom-100%" : " hidden"
        } flex flex-col w-[300px] rounded-xl text-black z-50`}
      >
        <NavLink className="px-2 py-2" to={"/"}>
          Home
        </NavLink>
        <NavLink className="px-2 py-2" to={"/worldnews"}>
          World
        </NavLink>
        <NavLink className="px-2 py-2" to={"/usnews"}>
          US
        </NavLink>
        <NavLink className="px-2 py-2" to={"/sciencnews"}>
          Science
        </NavLink>
        <NavLink className="px-2 py-2" to={"/artnews"}>
          Art
        </NavLink>
      </div>
    </div>
  );
};

export default DropDwon;
