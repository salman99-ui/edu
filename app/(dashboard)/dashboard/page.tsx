"use client";
import DashboardPage from "@/features/dashboard/dashboard";
import { ProtectedRoute } from "@/shared/guard";
import React from "react";

function page() {
  return (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  );
}

export default page;
