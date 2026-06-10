"use client";
import { useGetAllCoursesMutMutation } from "@/core/services/app/course";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function useCoursesHook() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [param, setParam] = useState<CoursePayloadAPI>({
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? "",
  });
  const [getCourse, { isLoading, data, isError }] =
    useGetAllCoursesMutMutation();

  const handleInputChange = (key: ChangeInputKey, value: string) => {
    setParam((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleUrl = () => {
    const params = new URLSearchParams();

    Object.entries(param).forEach(([key, value]) => {
      if (value) {
        params.set(key, String(value));
      }
    });

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getCourse(param);
      handleUrl();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [param]);

  return {
    isLoading,
    isError,
    data,
    param,
    handleInputChange,
  };
}

export default useCoursesHook;
