import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const SectionMainNewsCard = ({ news }) => {
  const [isDetail, setIsDetail] = useState(false);
  const nav = useNavigate();
  const showedNews = news.slice(0, 3);

  return (
    <>
      {isDetail && <Outlet />}
      <div className="flex flex-col gap-2 pr-2">
        {showedNews?.map((item, index) => (
          <button
            onClick={() => {
              nav(`/${item.id}`, { state: { item } });
              setIsDetail(true);
            }}
            className="flex gap-2 bg-white dark:bg-gray-500 dark:text-gray-200"
            key={index}
          >
            <div>
              {item?.multimedia?.[1] && (
                <img className="max-h-40" src={item.multimedia[1].url} alt="" />
              )}
            </div>
            <div className="w-2/3">
              <h1 className="text-md font-bold">{item.title}</h1>
              <p className="line-clamp-2">{item.abstract}</p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default SectionMainNewsCard;
