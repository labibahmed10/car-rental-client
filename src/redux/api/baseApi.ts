import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NODE_ENV === "production" ? import.meta.env.VITE_APP_SERVER_API : import.meta.env.VITE_APP_LOCAL_API,
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
