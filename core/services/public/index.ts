"use client";
import { QueryPublic } from "../../http";
import { createApi } from "@reduxjs/toolkit/query/react";

export const apiPublic = createApi({
  reducerPath: "api/public",
  baseQuery: QueryPublic,
  endpoints: () => ({}),
});
