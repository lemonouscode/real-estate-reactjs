import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your authentication API endpoint
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useLoginMutation, useRegisterMutation } = authApi;