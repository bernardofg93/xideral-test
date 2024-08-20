import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
   baseUrl: 'http://localhost:4000',
   prepareHeaders: (headers, {getState}) => {
      return headers
   }
});
