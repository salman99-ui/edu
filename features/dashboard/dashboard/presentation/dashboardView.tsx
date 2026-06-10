"use client";
import React from "react";
import Courses from "../components/Dashboard/Courses";
import MyCourses from "../components/Dashboard/MyCourses";
import RecommendCourse from "../components/Dashboard/RecommendCourse";

function DashboardView() {
  return (
    <div>
      <div className="mb-24">
        <Courses />
      </div>

      <div className="mb-24">
        <MyCourses />
      </div>

      <div>
        <RecommendCourse />
      </div>
    </div>
  );
}

export default DashboardView;
