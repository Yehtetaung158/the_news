import React from "react";
import NewsCards from "../component/navComponents/news/NewsCards";
import SectionNewsCard from "../component/navComponents/news/sectionNews/SectionNewsCard";
import AllNewCard from "../component/navComponents/news/allNews/AllNewCard";
import Footer from "../component/navComponents/Footer";
import useTopStoryFetch from "../hook/useTopStoryFetch";
import Error from "../component/navComponents/Error";

const ScienceNewsPage = () => {
  const { isError, refetch } = useTopStoryFetch("science");
  const sectionPath = ["science", "climate", "health"];
  return (
    <div>
      {isError ? <> 
      {<Error refetch={refetch}/>}
      </> : <>
    <div className=" w-full">
      {<NewsCards section={"science"} />}
      <div>
        <div>
          {<SectionNewsCard section={"science"} sectionPath={sectionPath} />}
        </div>
      </div>
      <div className="  bg-white dark:bg-gray-700">
        {<AllNewCard section={"science"} />}
      </div>
      <div className=" bg-gray-200 dark:bg-gray-800">{<Footer />}</div>
    </div>
      </>}
    </div>
  );
};

export default ScienceNewsPage;
