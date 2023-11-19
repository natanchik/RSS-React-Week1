import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import baseUrl from '../constants';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  tagTypes: ['Cards'],
  baseQuery: retry(fetchBaseQuery({ baseUrl }), { maxRetries: 10 }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: ({ page = 1, search = '' }) =>
        `?page=${page}${
          search ? `&search=${search.split(' ').join('+')}` : ''
        }`,
      providesTags: ['Cards'],
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;