import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://redux-server-fawn.vercel.app" }),

  endpoints: () => ({}),
});

export default baseApi;
