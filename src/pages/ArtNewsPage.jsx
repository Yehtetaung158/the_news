import React from 'react'
import NewsCards from '../component/navComponents/news/NewsCards'
import SectionNewsCard from '../component/navComponents/news/sectionNews/SectionNewsCard';
import AllNewCard from '../component/navComponents/news/allNews/AllNewCard';
import Footer from '../component/navComponents/Footer';

const ArtNewsPage = () => {
  const sectionPath = ["arts", "books", "movies","theater"];
  return (
    <div className=' w-full'>
        {<NewsCards section={"arts"}/>}
        <div>
        <div>{<SectionNewsCard section={"arts"} sectionPath={sectionPath}/>}</div>
      </div>
      <div className="  bg-white dark:bg-gray-700">
        {<AllNewCard section={"arts"}/>}
      </div>
      <div className=" bg-gray-200 dark:bg-gray-800">
        {<Footer/>}
      </div>
    </div>
  )
}

export default ArtNewsPage