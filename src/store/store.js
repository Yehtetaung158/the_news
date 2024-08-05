import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ApiService } from './service/Apiservice'
import navReducer from "./slice/navSlice"

export const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
    nav: navReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
})

setupListeners(store.dispatch)