import React from "react";
import { useGetHomeQuery } from "../store/service/endpoint/topStoryEndpoint";

const useTopStoryFetch = (section) => {
  const { data, isError, isLoading,refetch } = useGetHomeQuery(section, {
    skip: !section,
  });
  const item = data?.results?.map((item, index) => ({
    ...item,
    id: index,
  }));
  return {
    data: { ...data, results: item },
    isError,
    isLoading,
    refetch
  };
};

export default useTopStoryFetch;
