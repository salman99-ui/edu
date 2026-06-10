"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const ProtectedRoute = ({ children }: GuardProps) => {
  const route = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token-app") : "";

  if (!token) {
    route.replace("/login");
    return null;
  }

  return children;
};
