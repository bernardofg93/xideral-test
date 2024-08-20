import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
   baseUrl: 'https://xideral-test.vercel.app',
   prepareHeaders: (headers, {getState}) => {
      return headers
   }
});
