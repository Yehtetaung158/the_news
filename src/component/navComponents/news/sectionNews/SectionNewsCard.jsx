import React from "react";
import useTopStoryFetch from "../../../../hook/useTopStoryFetch";
import SectionMainNewsCard from "./SectionMainNewsCard";
import SideNews from "../SideNews";
import AllNewCard from "../allNews/AllNewCard";

const SectionNewsCard = ({ section, sectionPath }) => {
  const skeletonArray = new Array(2).fill(0);
  const { data, isError, isLoading } = useTopStoryFetch(section);
  const opinion = data?.results?.filter((i) => i.section === "opinion");
  const currentPagePath = data?.results?.filter((i) =>
    sectionPath.includes(i.section)
  );

  const newsBySection = currentPagePath?.reduce((acc, item) => {
    const section = item.section;
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(item);
    return acc;
  }, {});

  return (
    <>
      {isLoading ? (
        <div className=" flex flex-col gap-2 p-2">
          {skeletonArray.map((_, index) => (
            <div
              className="flex gap-2 bg-white dark:bg-gray-500 dark:text-gray-200 animate-pulse"
              key={index}
            >
              <div className="w-40 h-40 bg-gray-300"></div>
              <div className="w-2/3 flex flex-col justify-center">
                <div className="h-6 bg-gray-300 mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-300 w-full"></div>
                <div className="h-4 bg-gray-300 mt-2 w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {isError ? (
            <>error</>
          ) : (
            <>
              <div className=" flex max-[500px]:flex-col  gap-2 w-full border-b-2 border-black bg-white dark:bg-gray-700 py-2 ">
                <div
                  className={` flex flex-col gap-2 ${
                    opinion?.length > 0 && "w-3/4"
                  } px-2 py-2 max-[500px]:border-r-0 border-r-2 border-black max-[500px]:w-full`}
                >
                  {newsBySection &&
                    Object.entries(newsBySection).map(([section, i]) => (
                      <div key={section}>
                        <h1 className=" first-letter:uppercase text-lg font-bold dark:text-gray-200">
                          {section} News
                        </h1>
                        <div className=" flex flex-col gap-2">
                          {<SectionMainNewsCard news={i} />}
                        </div>
                      </div>
                    ))}
                </div>
                {opinion?.length > 0 && (
                  <div className=" max-[500px]:flex hidden">
                    <>
                      <div className="">
                        <h1 className=" first-letter:uppercase text-lg font-bold dark:text-gray-200">
                          opinions
                        </h1>
                        {data && <>{<SectionMainNewsCard news={opinion} />}</>}
                      </div>
                    </>
                  </div>
                )}
                {opinion?.length > 0 && (
                  <div className="max-[500px]:hidden w-1/4">
                    <>
                      <div className="">
                        <h1 className=" first-letter:uppercase text-lg font-bold dark:text-gray-200">
                          opinions
                        </h1>
                        {data && (
                          <>{<SideNews page={section} data={opinion} />}</>
                        )}
                      </div>
                    </>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SectionNewsCard;
