import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./api";

export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: baseQuery,
   tagTypes: ['Interview', 'Candidate'],
   endpoints(builder) {
      return {
         fetchUsers: builder.query({
            query: () => ({
               url: '/users',
            })
         }),
      }
   }
})

export const {
   useFetchUsersQuery,
} = apiSlice;
