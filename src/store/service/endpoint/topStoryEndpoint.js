import { ApiService } from "../Apiservice";

const topStoryApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getHome:builder.query({
        query:(section)=>({
            url:`/topstories/v2/${section}.json?api-key=z1pM06pKE8GEc84A0CMTvIB5wrHLKnCe`
        })
    })
  }),
});


export const {useGetHomeQuery} = topStoryApi;
