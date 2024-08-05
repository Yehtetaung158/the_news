import React from "react";
import useTopStoryFetch from "../../../../hook/useTopStoryFetch";
import DateTimeConverter from "../../../DateTimeConverter";
import Logo from "../../../ui/Logo";

const AllNewCard = ({ section }) => {
  const { data, isError, isLoading } = useTopStoryFetch(section);
//   console.log(data?.results);
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
        <div className=" grid grid-cols-3 gap-4 lg:grid-cols-4 pt-2">
          {data?.results?.slice(0, 6).map((i, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border shadow-sm"
            >
              <img className="w-full h-auto" src={i.multimedia[1].url} alt="" />
              <div className="p-4 md:p-5">
                <h3 className="text-sm font-bold text-gray-800">
                  Card {i.title}
                </h3>
                <p className="mt-5 text-xs text-gray-500">
                  <DateTimeConverter dateTimeString={i.created_date} />
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className=" flex w-full justify-center items-center py-4">
        <button className=" bg-gray-300 rounded-md px-2 py-1 text-sm">
          Load More
        </button>
      </div>
    </>
  );
};

export default AllNewCard;
