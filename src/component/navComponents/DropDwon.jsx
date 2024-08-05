import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DropDwon = () => {
  const mode=useSelector((state) => state.nav.mode)
  if (mode) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  return (
    <div className="m-1 rounded-lg hs-dropdown [--trigger:hover] relative inline-flex">
      <button
        id="hs-dropdown-hover-event"
        type="button"
        className=" dark:bg-slate-400 hs-dropdown-toggle py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
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
      </button>
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0  min-w-60 bg-white dark:bg-slate-400 shadow-md rounded-lg p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full hidden z-40"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-hover-event"
      >
        <NavLink className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 dark:text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
          Myanmar
        </NavLink>
        <NavLink className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 dark:text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
          World
        </NavLink>
        <NavLink className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 dark:text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
          Art
        </NavLink>
      </div>
    </div>
  );
};

export default DropDwon;
