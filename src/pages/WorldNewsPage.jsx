import React from "react";
import NewsCards from "../component/navComponents/news/NewsCards";
import SectionNewsCard from "../component/navComponents/news/sectionNews/SectionNewsCard";
import Footer from "../component/navComponents/Footer";
import AllNewCard from "../component/navComponents/news/allNews/AllNewCard";
import useTopStoryFetch from "../hook/useTopStoryFetch";
import Error from "../component/navComponents/Error";

const WorldNewsPage = () => {
  const { isError, refetch } = useTopStoryFetch("world");
  const sectionPath = ["world", "technology", "science", "art"];
  return (
    <div>
      {isError ? (
        <>{<Error section={"world"} refetch={refetch} />}</>
      ) : (
        <>
          <div className=" w-full">
            {<NewsCards section={"world"} />}
            <div>
              <div>
                {
                  <SectionNewsCard
                    section={"world"}
                    sectionPath={sectionPath}
                  />
                }
              </div>
            </div>
            <div className="  bg-white dark:bg-gray-700">
              {<AllNewCard section={"world"} />}
            </div>
            <div className=" bg-gray-200 dark:bg-gray-800">{<Footer />}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default WorldNewsPage;
