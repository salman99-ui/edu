"use client";
import { useGetCourseCountQuery } from "@/core/services/app/course";
import React from "react";

function useCountHook() {
  const { data, isLoading , isError} = useGetCourseCountQuery("");

  return { data, isLoading , isError };
}

export default useCountHook;
