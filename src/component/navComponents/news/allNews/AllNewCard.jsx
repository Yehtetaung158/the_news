import React, { useState } from "react";
import useTopStoryFetch from "../../../../hook/useTopStoryFetch";
import DateTimeConverter from "../../../DateTimeConverter";
import Logo from "../../../ui/Logo";
import { Outlet, useNavigate } from "react-router-dom";

const AllNewCard = ({ section }) => {
  const { data, isError, isLoading } = useTopStoryFetch(section);
  const [isDetail, setIsDetail] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [moreLoad, setMoreLoad] = useState(10);
  const nav = useNavigate();
  //   console.log(data?.results);
  const loadMoreHandle = () => {
    setMoreLoad(data?.results.length);
    setIsMore(true);
  };
  const loadLessHandle = () => {
    setMoreLoad(10);
    setIsMore(false);
  };
  return (
    <>
      <div className=" flex items-center gap-4 px-4 py-4">
        <div className="bg-black w-full dark:bg-red-700 h-1"></div>
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div className="bg-black dark:bg-red-700 w-full h-1"></div>
      </div>
      {isLoading ? (
        <>
          <div className="w-full h-48 bg-gray-300 animate-pulse rounded-t-xl"></div>
          <div className="p-4 md:p-5">
            <div className="w-3/4 h-6 bg-gray-300 animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-300 animate-pulse mb-2"></div>
            <div className="w-5/6 h-4 bg-gray-300 animate-pulse mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-300 animate-pulse mt-5"></div>
          </div>
        </>
      ) : isError ? (
        <>Error</>
      ) : (
        <>
          {isDetail && <Outlet />}
          <div className=" grid grid-cols-3 gap-4 lg:grid-cols-4 pt-2">
            {data?.results?.slice(0, moreLoad).map((item, index) => (
              <button
                onClick={() => {
                  nav(`/${item.id}`, { state: { item } });
                  setIsDetail(true);
                }}
                key={index}
                className="flex flex-col bg-white border shadow-sm"
              >
                {item?.multimedia?.[1] && (
                  <img
                    src={item.multimedia[1].url}
                    alt={item.multimedia[1].caption || "Side News Image"}
                  />
                )}
                <div className="p-4 md:p-5">
                  <h3 className="text-sm font-bold text-gray-800">
                    Card {item.title}
                  </h3>
                  <p className="mt-5 text-xs text-gray-500">
                    <DateTimeConverter dateTimeString={item.created_date} />
                  </p>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
      <div className=" flex w-full justify-center items-center py-4">
        {isMore ? (
          <>
            <button
              onClick={loadLessHandle}
              className=" bg-gray-300 rounded-md px-2 py-1 text-sm"
            >
              Show Less
            </button>
          </>
        ) : (
          <>
            <button
              onClick={loadMoreHandle}
              className=" bg-gray-300 rounded-md px-2 py-1 text-sm"
            >
              Show More
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default AllNewCard;
