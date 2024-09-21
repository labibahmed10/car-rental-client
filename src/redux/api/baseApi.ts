import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_SERVER_API,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["cars", "user", "booking"],
  endpoints: () => ({}),
});

export default baseApi;
