import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
    reducerPath: 'articlesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ek-reddit.herokuapp.com/api' }),
    endpoints: (builder) => ({
      getAllarticles: builder.query({
        query: () => "articles", 
      }),
    }),
  })

  export const {useGetAllProductListQuery} = articlesApi; // useGetAllProductListQuery=>custom hook