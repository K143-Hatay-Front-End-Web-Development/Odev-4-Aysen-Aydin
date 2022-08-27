import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { heroApi } from './hero-service'

export const store = configureStore({
  reducer: {
    [heroApi.reducerPath]: heroApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([heroApi.middleware]),
});
setupListeners(store.dispatch)
