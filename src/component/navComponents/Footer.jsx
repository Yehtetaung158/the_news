import React from "react";
import Logo from "../ui/Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" flex justify-around dark:text-gray-200 px-4 py-4 min-h-[200px]">
        <div>
          <ul className=" flex flex-col gap-2 font-light text-sm">
            <li className=" text-lg font-bold">Contents</li>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/worldnews"}>World</NavLink>
            <NavLink to={"/usnews"}>US</NavLink>
            <NavLink to={"/sciencnews"}>Science</NavLink>
            <NavLink to={"/artnews"}>Art</NavLink>
          </ul>
        </div>
        <div>
          <div>
            <ul>
              <li>{<Logo />}</li>
            </ul>
          </div>
          <div>
            <ul className=" flex flex-col gap-2 font-light text-sm">
              <li>Social Media</li>
              <li>Facebook</li>
              <li>YouTube</li>
              <li>Telegram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 dark:bg-gray-900 py-2 px-2">
        <h1 className=" flex justify-start text-sm dark:text-gray-200">
          Copyright © 2024 ENG.THENEWS.COM
        </h1>
      </div>
    </>
  );
};

export default Footer;
