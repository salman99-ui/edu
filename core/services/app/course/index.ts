import { API_METHOD } from "@/shared/constant";
import { apiApp } from "..";

export const apiCourse = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    getCourseCount: builder.query<CourseCountResponse, string>({
      query: () => ({
        url: "/course/count",
        method: API_METHOD.GET,
      }),
      transformResponse: (resp: CourseResponseDataAPI) => resp.data,
    }),
    getCourseAccount: builder.query<CourseAccountResponseAPI[], string>({
      query: () => ({
        url: "/course/account",
        method: API_METHOD.GET,
      }),
      transformResponse: (resp: CourseDataAPI) => resp.data,
    }),
    getRecommendCourse: builder.query<CourseRecommendResponseAPI[], string>({
      query: () => ({
        url: "/course/recommend",
        method: API_METHOD.GET,
      }),
      transformResponse: (resp: CourseDataAPI) => resp.data,
    }),

    getAllCourses: builder.query<CourseResponseAPI[], string>({
      query: () => ({
        url: "/course/courses",
        method: API_METHOD.GET,
      }),
      transformResponse: (resp: CourseDataAPI) => resp.data,
    }),
    getAllCoursesMut: builder.mutation<CourseResponseAPI[], CoursePayloadAPI>({
      query: (params) => ({
        url: "/course/courses",
        method: API_METHOD.GET,
        params,
      }),
      transformResponse: (resp: CourseDataAPI) => resp.data,
    }),
    updateSetting: builder.mutation<CourseAccountDataAPI, string>({
      query: () => ({
        url: "/course/setting",
        method: API_METHOD.PUT,
      }),
    }),
  }),
});

export const {
  useGetCourseCountQuery,
  useGetCourseAccountQuery,
  useGetRecommendCourseQuery,
  useGetAllCoursesQuery,
  useGetAllCoursesMutMutation,
  useUpdateSettingMutation,
} = apiCourse;
