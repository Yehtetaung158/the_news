import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const SideNews = ({ data }) => {
  const [isDetail, setIsDetail] = useState(false);
  const nav = useNavigate();

  return (
    <>
      {isDetail && (
        <Outlet />
      )}
      <div className="flex flex-col gap-2 pr-2">
        {data?.slice(1, 4).map((item, index) => (
          <button
            onClick={() => {
              nav(`/${item.id}`, { state: { item } });
              setIsDetail(true);
            }}
            key={index}
          >
            <div className="relative">
              {item?.multimedia?.[0] && (
                <img
                  src={item.multimedia[0].url}
                  alt={item.multimedia[0].caption || "Side News Image"}
                />
              )}
              <h1 className="absolute bottom-0 text-white p-1">
                {item.title}
              </h1>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default SideNews;
