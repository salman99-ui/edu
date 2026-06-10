import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const baseQueryPublic = fetchBaseQuery({
  baseUrl,
});

const BaseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as any).auth.accessToken ??
      localStorage.getItem("token-app") ??
      "";
    headers.set("Authorization", "Bearer " + token);
  },
});

export const QueryPublic: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, store, options) => {
  let result = await baseQueryPublic(args, store, options);
  return result;
};

export const QueryApp: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, store, options) => {
  let result = await BaseQuery(args, store, options);

  if (result.error) {
    // try refresh
  }

  return result;
};
