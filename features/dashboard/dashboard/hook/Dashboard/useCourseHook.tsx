"use client";

import { useGetCourseAccountQuery } from "@/core/services/app/course";
import React from "react";

function useCourseHook() {
  const { data, isLoading, isError } = useGetCourseAccountQuery("");

  return {
    isLoading,
    isError,
    data,
  };
}

export default useCourseHook;
