import React from "react";
import useTopStoryFetch from "../../../hook/useTopStoryFetch";
import MainNewsCard from "./MainNewsCard";
import SideNews from "./SideNews";

const NewsCards = ({ section }) => {
  const { data, isError, isLoading } = useTopStoryFetch(section);
  return (
    <div className=" w-full bg-white  dark:bg-gray-700 dark:text-gray-200 py-2 border-b-2 border-black">
      {isLoading ? (
        <>
          <div className="animate-pulse p-4">
          <div className="flex justify-center w-full">
            <div className="relative w-full h-48 bg-gray-300"></div>
          </div>
          <div className="flex flex-col gap-2 px-2 py-3">
            <div className="h-6 bg-gray-300 w-3/4"></div>
            <div className="h-16 bg-gray-300 w-full"></div>
            <div className="h-10 bg-gray-300 w-24"></div>
          </div>
        </div>
        </>
      ) : isError ? (
        <>
          <h1>Error...!</h1>
        </>
      ) : (
        data && (
          <div className="flex gap-2">
            <div className="w-3/4 border-r-2 max-[500px]:w-full max-[500px]:border-0 border-black pr-2">
              <MainNewsCard data={data} section={section}/>
            </div>
            <div className="w-1/4 max-[500px]:hidden">
              <SideNews data={data.results} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default NewsCards;
