import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = '4a475bf63575503066b6aea19a29d1cd';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `weather?q=${city}&appid=${API_KEY}`,
    }),
    getWeatherByCoordinates: builder.query({
      query: ({ lat, lon }) => `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    }),
  }),
});

export const { useGetWeatherByCityQuery, useGetWeatherByCoordinatesQuery } = weatherApi;
