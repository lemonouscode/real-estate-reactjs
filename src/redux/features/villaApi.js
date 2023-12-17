import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl:import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.token;
    const token = localStorage.getItem('jwt_token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});


export const villaApi = createApi({
  reducerPath: 'villaApi',
  baseQuery,
  endpoints: (builder) => ({
    getVillas: builder.query({
        query: () => '/villas',
    }),
    createVilla: builder.mutation({
      query: (villaData) => {
        return {
          url: '/create-villa',
          method: 'POST',
          body: villaData,
          headers: {
            'Accept': 'application/json',
          },
        };
      },
    }),
    updateVilla: builder.mutation({
      query: ( {slug, data} ) => {
        return {
          url: `/villa/${slug}`,
          method: 'POST', // or 'PUT' depending on your server setup
          body: data,
          headers: {
            'Accept': 'application/json',
          },
        };
      },
    }),
    getVillaBySlug: builder.query({
      query: (slug) => `/villa/${slug}`,
    }),
    getFeaturedVillas: builder.query({
      query: () => '/featured_villas/'
    }),
    deleteVilla: builder.mutation({
      query: ( slug ) => {
        return {
          url: '/villa/' + slug,
          method: 'DELETE',
        }
      }
    }),
    getSavedVillas:builder.query({
      query: (userID) => '/saved-villas/'+ userID
    }),
    saveVilla:builder.mutation({
      query: (data)=> {
        return {
          url: '/save-villa',
          method: 'POST',
          body: data,
          headers: {
            'Content-type': 'application/json',
          },
        }
      }
    }),
    unSaveVilla:builder.mutation({
      query: (id)=> {
        return {
          url: '/saved-villa/' + id,
          method: 'DELETE'
        }
      }
    })
  }),
});


export const { 
  useGetVillasQuery,
  useCreateVillaMutation,
  useUpdateVillaMutation,
  useGetVillaBySlugQuery,
  useGetFeaturedVillasQuery,
  useDeleteVillaMutation,
  useGetSavedVillasQuery,
  useSaveVillaMutation,
  useUnSaveVillaMutation
} = villaApi;