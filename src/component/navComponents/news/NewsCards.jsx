import React from "react";
import useTopStoryFetch from "../../../hook/useTopStoryFetch";
import MainNewsCard from "./MainNewsCard";
import SideNews from "./SideNews";

const NewsCards = ({ section }) => {
  const { data, isError, isLoading } = useTopStoryFetch(section);
  console.log(data?.results)
  return (
    <div className=" w-full bg-white  dark:bg-gray-700 dark:text-gray-200 py-2 border-b-2 border-black">
      {isLoading ? (
        <>
          <h1>loading...</h1>
        </>
      ) : isError ? (
        <>
          <h1>Error...!</h1>
        </>
      ) : (
        data && (
          <div className="flex gap-2">
            <div className="w-3/4 border-r-2 border-black pr-2">
              <MainNewsCard data={data} />
            </div>
            <div className="w-1/4">
              <SideNews data={data.results} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default NewsCards;
