import React from "react";

const MainNewsCard = ({data}) => {
  return (
    <div className="">
      <div className="flex justify-center w-full">
        <div className="relative ">
          <img src={data?.results[0].multimedia[1].url} alt="" />
          <div className=" absolute bottom-2 left-0 text-white">
            <h1 className=" px-2 text-xl font-bold">
              {data?.results[0].title}
            </h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 px-2 py-3">
        <div>
          <p className="line-clamp-3">{data?.results[0].abstract}</p>
        </div>
        <div>
          <button className=" bg-gray-800 text-white px-2 py-2 rounded-lg">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNewsCard;
