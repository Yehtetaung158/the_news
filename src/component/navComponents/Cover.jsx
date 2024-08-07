import React from "react";
import Logo from "../ui/Logo";
import { useGetWeatherByCityQuery } from "../../store/service/WeatherApiService";

const Cover = () => {
  const { data, refetch, isError, isLoading } =
    useGetWeatherByCityQuery("Yangon");
  const icon = data?.weather[0]?.icon;

  return (
    <div>
      <div className="flex justify-between px-2 py-2 dark:bg-gray-900 border-b-2 border-black">
        <div>
          <h1 className="items-center bg-black text-white px-2 py-1">
            Newspaper
          </h1>
        </div>
        <div>
          <Logo />
        </div>
        <button
          onClick={refetch}
          className="flex gap-2 justify-start items-center text-xs text-black dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 rounded-lg"
        >
          {isLoading ? (
            <h1>loading...</h1>
          ) : isError ? (
            <h1>error</h1>
          ) : (
            <>
              <div className="flex justify-center items-center">
                {icon && (
                  <img
                    className="size-8"
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="Weather Icon"
                  />
                )}
                <h1>{data?.weather[0].main}</h1>
              </div>
              <h1>/</h1>
              <h1>{data?.name}</h1>
            </>
          )}
        </button>
      </div>
      <div className="fixed top-0 bg-white w-full h-screen dark:bg-gray-600 -z-10"></div>
    </div>
  );
};

export default Cover;


