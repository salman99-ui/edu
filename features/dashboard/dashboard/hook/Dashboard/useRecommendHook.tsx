"use client";
import { useGetRecommendCourseQuery } from "@/core/services/app/course";
import React from "react";

function useRecommendHook() {
  const { isLoading, data , isError} = useGetRecommendCourseQuery("");

  return {
    isLoading,
    isError,
    data,
  };
}

export default useRecommendHook;
