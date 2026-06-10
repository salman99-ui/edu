"use client";
import { API_METHOD } from "@/shared/constant";
import { apiPublic } from "..";

export const apiPublicUser = apiPublic.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponseAPI, LoginPayloadArg>({
      query: (body) => ({
        url: "/api/auth/login",
        method: API_METHOD.POST,
        body,
      }),
      transformResponse: (resp: LoginSuccessData) => resp.data,
    }),
  }),
});

export const { useLoginUserMutation } = apiPublicUser;
