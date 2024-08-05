import React from 'react'
import { useGetHomeQuery } from '../store/service/endpoint/topStoryEndpoint'

const useTopStoryFetch = (section) => {
    const {data,isError,isLoading}=useGetHomeQuery(section,{skip:!section})
  return {
    data,isError,isLoading
  }
}

export default useTopStoryFetch