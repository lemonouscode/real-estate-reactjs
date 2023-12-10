import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import { authApi } from './features/authApi'
import { villaApi } from './features/villaApi';
import { contactApi } from './features/contactApi';

export default configureStore({
  reducer: {
    auth:authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [villaApi.reducerPath]: villaApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, villaApi.middleware, contactApi.middleware), // Add API middleware
});