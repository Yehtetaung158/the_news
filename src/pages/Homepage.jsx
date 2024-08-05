import React from "react";
import NewsCards from "../component/navComponents/news/NewsCards";
import SectionNewsCard from "../component/navComponents/news/sectionNews/SectionNewsCard";
import AllNewCard from "../component/navComponents/news/allNews/AllNewCard";
import Footer from "../component/navComponents/Footer";

const Homepage = () => {
  const sectionPath=["world","us","science","art"]
  return (
    <div className=" w-full">
      {<NewsCards section={"home"} />}
      <div>
        <div>{<SectionNewsCard section={"home"} sectionPath={sectionPath}/>}</div>
      </div>
      <div className="  bg-white dark:bg-gray-700">
        {<AllNewCard section={"home"}/>}
      </div>
      <div className=" bg-gray-200 dark:bg-gray-800">
        {<Footer/>}
      </div>
    </div>
  );
};

export default Homepage;
