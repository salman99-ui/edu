"use client";
import React from "react";
import useCourseHook from "../../hook/Dashboard/useCourseHook";
import CardProduct from "@/shared/components/CardProduct";

function MyCourses() {
  const { data, isLoading , isError } = useCourseHook();

  return (
    <div>
      <div className="mb-10">
        <p className="font-medium text-2xl mb-6">
          Kursus Saya ({data?.length ?? 0})
        </p>
      </div>

      {isLoading && (
        <>
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
          </div>
        </>
      )}

      {!isLoading && data && data.length === 0 && (
        <div className="h-64 flex justify-center items-center">
          <div>
            <p className="text-4xl m-0 mb-5 text-center">
              Belum ada kursus yang diikuti
            </p>
            <p className="text-lg text-SC text-center">
              Tambah kursus di daftar kursus
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="block w-full bg-primary h-10 rounded-lg text-FC font-medium"
              >
                Tambah Kursus
              </button>
            </div>
          </div>
        </div>
      )}

      {!isLoading && data && data.length > 0 && (
        <div className="grid grid-cols-4 gap-5">
          {data.map((item, index) => (
            <div className="col-span-1" key={`cf-${index}`}>
              <CardProduct key={`cc-${index}`} {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCourses;
