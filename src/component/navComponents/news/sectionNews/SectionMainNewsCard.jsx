import React from 'react'

const SectionMainNewsCard = ({news}) => {
    const showedNews=news.slice(0,3)
  return (
    <>
      {showedNews?.map((items, index) => (
        <div className=' flex gap-2 bg-white dark:bg-gray-500 dark:text-gray-200' key={index}>
          <div className=''>
            <img className=' max-h-40' src={items.multimedia[1].url} alt="" />
          </div>
          <div className=' w-2/3'>
            <h1 className=' text-md font-bold'>{items.title}</h1>
            <p className=' line-clamp-2'>{items.abstract}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default SectionMainNewsCard