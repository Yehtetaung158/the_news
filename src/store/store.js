import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ApiService } from './service/Apiservice'
import { weatherApi } from './service/WeatherApiService'
import navReducer from "./slice/navSlice"

export const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    nav: navReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware,weatherApi.middleware),
})

setupListeners(store.dispatch)