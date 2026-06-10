"use client"
import { QueryApp } from "../../http";
import { createApi } from "@reduxjs/toolkit/query/react";

export const apiApp = createApi({
  reducerPath: "api/app",
  baseQuery: QueryApp,
  endpoints: () => ({}),
});
