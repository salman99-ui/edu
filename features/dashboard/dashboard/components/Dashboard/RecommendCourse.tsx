"use client";
import React from "react";
import useRecommendHook from "../../hook/Dashboard/useRecommendHook";
import CardProduct from "@/shared/components/CardProduct";

function RecommendCourse() {
  const { isLoading, data, isError } = useRecommendHook();

  return (
    <div>
      <div>
        <div className="mb-10">
          <p className="font-medium text-2xl mb-6">Rekomendasi Kursus</p>
        </div>

        {isLoading && (
          <>
            <div className="grid grid-cols-4 gap-5">
              <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
              <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
              <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
              <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
            </div>
          </>
        )}

        {isError && (
          <div className="h-64 flex justify-center items-center">
            <div>
              <p className="text-4xl m-0 mb-5 text-center">
                Belum ada dafatar kursus yang dapat diikuti
              </p>
              <p className="text-lg text-SC text-center">
                Mohon tunggu beberapa saat ...
              </p>
            </div>
          </div>
        )}

        {!isLoading && data && data.length === 0 && (
          <div className="h-64 flex justify-center items-center">
            <div>
              <p className="text-4xl m-0 mb-5 text-center">
                Belum ada dafatar kursus yang dapat diikuti
              </p>
              <p className="text-lg text-SC text-center">
                Mohon tunggu beberapa saat ...
              </p>
            </div>
          </div>
        )}

        {!isLoading && data && data.length > 0 && (
          <>
            <div className="grid grid-cols-4 gap-5">
              {data.map((item, index) => (
                <div className="col-span-1" key={`rc-${index}`}>
                  <CardProduct key={`cr-${index}`} {...item} isCourses />
                </div>
              ))}
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="block w-full bg-transparent cursor-pointer border border-solid border-black/40 h-10 rounded-lg font-medium"
              >
                Lihat Lebih Banyak
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RecommendCourse;
