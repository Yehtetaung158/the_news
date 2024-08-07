import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const NewsDetailPage = () => {
  const nav = useNavigate();
  const navHandle = () => {
    nav(-1);
  };
  const location = useLocation();
  const { id } = useParams();
  const item = location?.state?.item;
//   console.log(id, location.state.item);
  return (
    <div className=" w-full h-screen py-2">
      <div className=" fixed top-0  w-full h-screen bg-white dark:bg-gray-700 -z-10"></div>
      <div className=" h-full relative">
        <button
          onClick={navHandle}
          className=" absolute top-2 right-2  bg-gray-200  px-4 py-2 rounded z-20"
        >
          Back
        </button>
        {item?.multimedia?.[0] && (
                <img
                  className=" h-5/6 mx-auto"
                  src={item.multimedia[0]?.url}
                  alt={item.multimedia[0]?.caption || "Side News Image"}
                />
              )}
        {/* <img className=" h-5/6 mx-auto" src={item?.multimedia[0].url} alt="" /> */}
        <div className=" px-4 my-3 dark:text-gray-200">
          <h1 className=" text-2xl font-bold ">{item?.title}</h1>
          <p>{item?.abstract}</p>
        </div>
        <div className=" px-4 my-3">
          <a
            className=" text-purple-500"
            href={item?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on NewYork Time
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
