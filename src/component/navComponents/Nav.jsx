import React from "react";
import { NavLink } from "react-router-dom";
import DropDwon from "./DropDwon";
import Theme from "./Theme";
import { useSelector } from "react-redux";

const Nav = () => {
  const mode = useSelector((state) => state.nav.mode);
  if (mode) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }

  return (
    <>
      <div className=" sticky top-0 z-50 flex items-center gap-2 dark:bg-slate-800 bg-white dark:text-white px-2">
        <div className="w-fit">
          <DropDwon />
        </div>
        <div className="flex items-center justify-start gap-4 px-2 py-2 w-5/6">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/worldnews"}>World</NavLink>
          <NavLink to={"/usnews"}>US</NavLink>
          <NavLink to={"/sciencnews"}>Science</NavLink>
          <NavLink to={"/artnews"}>Art</NavLink>
        </div>
        <div>
          <Theme />
        </div>
      </div>
    </>
  );
};

export default Nav;
