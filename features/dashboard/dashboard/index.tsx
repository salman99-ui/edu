"use client";
import { ProtectedRoute } from "@/shared/guard";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import DashboardView from "./presentation/dashboardView";
import CourseView from "./presentation/CourseView";
import Profile from "./presentation/Profile";
import { useStateCtxProfile } from "@/shared/context/profile";

function DashboardPage() {
  const { first_name, last_name, position } = useStateCtxProfile() ?? {};
  const [menu, setMenu] = useState<MenuState>("dashboard");
  const [openWelcome, setOpenWelcome] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setOpenWelcome(false);
    }, 2000);
  }, []);

  return (
    <ProtectedRoute>
      <div className="py-40 px-[150px] relative">
        <div className={clsx("bg-[#6CE9A6] h-[52px] absolute w-full top-10 left-0 flex items-center justify-center" , openWelcome ? "block" : "hidden")}>
          <p className="text-2xl text-[#101828]">
            Selamat datang kembali, {first_name} {last_name} 🌱 Minggu baru,
            semangat baru! Yuk lanjutkan perjalanan belajarmu 🚀
          </p>
        </div>
        <div className="mb-20">
          <div className="flex gap-5 items-center">
            <span>
              <img src="/assets/svg/photos.svg" />
            </span>
            <div>
              <p className="text-2xl font-medium mb-3 text-SC">
                {first_name} {last_name}
              </p>
              <p className="text-lg text-SC m-0">{position}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3 mb-10">
            <button
              className={clsx(
                "min-w-[190px] h-16 text-base inline-block bg-transparent border-no cursor-pointer",
                menu === "dashboard"
                  ? "border-x-0 border-t-0 border-b-4 border-solid border-[#2e90fa] font-medium text-SC"
                  : "text-disabled",
              )}
              onClick={() => setMenu("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={clsx(
                "min-w-[190px] h-16 text-base inline-block bg-transparent border-no cursor-pointer",
                menu === "course"
                  ? "border-x-0 border-t-0 border-b-4 border-solid border-[#2e90fa] font-medium text-SC"
                  : "text-disabled",
              )}
              onClick={() => setMenu("course")}
            >
              Daftar Kursus
            </button>
            <button
              className={clsx(
                "min-w-[190px] h-16 text-base inline-block bg-transparent border-no cursor-pointer",
                menu === "profile"
                  ? "border-x-0 border-t-0 border-b-4 border-solid border-[#2e90fa] font-medium text-SC"
                  : "text-disabled",
              )}
              onClick={() => setMenu("profile")}
            >
              Profile Saya
            </button>
          </div>

          <div>
            {menu === "dashboard" && <DashboardView />}
            {menu === "course" && <CourseView />}
            {menu === "profile" && <Profile />}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default DashboardPage;
