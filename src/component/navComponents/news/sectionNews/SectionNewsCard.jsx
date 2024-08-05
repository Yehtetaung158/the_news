import React from "react";
import useTopStoryFetch from "../../../../hook/useTopStoryFetch";
import SectionMainNewsCard from "./SectionMainNewsCard";
import SideNews from "../SideNews";

const SectionNewsCard = ({ section, sectionPath }) => {
  const { data, isError, isLoading } = useTopStoryFetch(section);
  const opinion = data?.results?.filter((i) => i.section === "opinion");
  console.log(opinion);
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
    <div className=" flex gap-2 w-full border-b-2 border-black bg-white dark:bg-gray-700 py-2">
      <div
        className={` flex flex-col gap-2 ${
          opinion?.length > 0 && "w-3/4"
        }  px-2 py-2 border-r-2  border-black`}
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
        <>
          <div className=" w-1/4">
            <h1 className=" first-letter:uppercase text-lg font-bold dark:text-gray-200">
              opinions
            </h1>
            {data && <>{<SideNews page={section} data={opinion} />}</>}
          </div>
        </>
      )}
    </div>
  );
};

export default SectionNewsCard;
