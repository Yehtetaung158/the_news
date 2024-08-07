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
              <a href="https://www.facebook.com/nytimes/?locale=en_GB" className=" flex justify-center items-center gap-2">
                <svg
                  className=" size-8"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={100}
                  height={100}
                  viewBox="0 0 120 120"
                >
                  <ellipse
                    cx={60}
                    cy="63.575"
                    opacity=".35"
                    rx={48}
                    ry="48.638"
                  />
                  <ellipse
                    cx={60}
                    cy="59.713"
                    fill="#0075ff"
                    rx={48}
                    ry="48.5"
                  />
                  <path
                    d="M54,52.612v50.21c1.967,0.248,3.966,0.391,6,0.391s4.033-0.143,6-0.391V52.399 c0-2.316,1.884-4.2,4.2-4.2H81V36.411H70.2C61.268,36.411,54,43.679,54,52.612z"
                    opacity=".35"
                  />
                  <path
                    fill="#a4e2f1"
                    d="M54,48.424v59.398c1.967,0.248,3.966,0.391,6,0.391s4.033-0.143,6-0.391V48.424 c0-2.316,1.884-4.2,4.2-4.2H81v-12H70.2C61.268,32.224,54,39.491,54,48.424z"
                  />
                  <polygon
                    points="77,76.199 42,76.199 42,64.199 80,64.199"
                    opacity=".35"
                  />
                  <polygon
                    fill="#a4e2f1"
                    points="78,72.199 42,72.199 42,60.199 81,60.199"
                  />
                </svg>
                Facebook
              </a>
              <a href="https://www.youtube.com/@nytimes" className=" flex gap-2 justify-center items-center">
                <svg
                  className=" size-8"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={100}
                  height={100}
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  />
                  <path fill="#FFF" d="M20 31L20 17 32 24z" />
                </svg>
                YouTube
              </a>
              <a href="https://telegram.me/nytimes" className=" flex gap-2 justify-center items-center">
                <svg
                className=" size-8"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={100}
                  height={100}
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#29b6f6"
                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                  />
                  <path
                    fill="#fff"
                    d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                  />
                  <path
                    fill="#b0bec5"
                    d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                  />
                  <path
                    fill="#cfd8dc"
                    d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                  />
                </svg>
                Telegram
              </a>
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
