import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().auth.token;
      const token = localStorage.getItem('jwt_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });


// Define your authentication API endpoint
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery,
  endpoints: (builder) => ({
    submitContact: builder.mutation({
      query: (formData) => ({
        url: '/contact',
        method: 'POST',
        body: formData,
      }),
    }),
    getContact: builder.query({
        query: ()=> '/contact'
    })
  }),
});

// Export hooks for usage in components
export const { useSubmitContactMutation, useGetContactQuery } = contactApi;