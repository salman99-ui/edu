"use client";
import React from "react";
import Progress from "../progress";

function CardProduct({
  title,
  subTitile,
  category,
  imgUrl,
  progress,
  isCourses = false,
}: CardProductProps) {
  return (
    <div className="rounded-lg bg-white shadow-lg">
      <div className="w-full rounded-t-lg">
        <img className="w-full" src={imgUrl} />
      </div>
      <div className="p-4">
        
        {isCourses && (
          <div className="mb-2">
            <div className="h-6 rounded-2xl bg-[#D1E9FF] px-2 inline-block text-primary">
              {category}
            </div>
          </div>
        )}

        <p className="text-[#475467] m-0 mb-3">{title}</p>
        <p className="text-SC text-base m-0 mb-3">{subTitile}</p>

        {!isCourses && (
          <div className="mb-4">
            <Progress progress={progress} />
          </div>
        )}

        <div className="flex-1">

        <div>
          <div className="mb-4">
            <button
              type="button"
              className="block cursor-pointer w-full bg-primary h-10 rounded-lg text-FC font-medium"
            >
              {isCourses
                ? "Lihat Detail Kursus"
                : progress !== 0
                  ? "Lanjutkan Kursus"
                  : "Mulai Kursus"}
            </button>
          </div>

          {isCourses && (
            <div className="mb-4">
              <button
                type="button"
                className="block cursor-pointer w-full bg-transparent border border-solid border-black/40 h-10 rounded-lg font-medium"
              >
                Tambah Kursus
              </button>
            </div>
          )}

          {!isCourses && (
            <>
              {progress === 100 && (
                <div className="mb-4">
                  <button
                    type="button"
                    className="block cursor-pointer w-full bg-[#D1E9FF] h-10 rounded-lg text-primary font-medium"
                  >
                    <div className="flex justify-center items-center gap-4">
                      <span>
                        <img src="/assets/svg/download-primary.svg" />
                      </span>
                      Download Sertifikat
                    </div>
                  </button>
                </div>
              )}

              {progress < 100 && (
                <div className="mb-4">
                  <button
                    type="button"
                    className="block w-full bg-[#98A2B3] h-10 rounded-lg text-FC font-medium"
                  >
                    <div className="flex justify-center items-center gap-4">
                      <span>
                        <img src="/assets/svg/download-disabled.svg" />
                      </span>
                      Download Sertifikat
                    </div>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
