"use client";
import clsx from "clsx";
import React, { useState } from "react";
import useCoursesHook from "../hook/Course/useCoursesHook";
import CardProduct from "@/shared/components/CardProduct";

function CourseView() {
  const { isLoading, isError, data, param, handleInputChange } =
    useCoursesHook();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="mb-10">
        <p className="font-medium text-2xl mb-6">
          Daftar Kursus ({data ? data.length : 0})
        </p>
      </div>

      {isLoading && (
        <>
          <div className="grid grid-cols-4 gap-5 mb-10">
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
            <div className="col-span-1 rounded-lg skeleton shadow-lg h-96"></div>
          </div>
        </>
      )}

      {!isError && (
        <>
          <div className="flex justify-between mb-6">
            <button
              className={clsx(
                "cursor-pointer outline-none border border-solid border-black/40 rounded-lg min-w-[216px] py-2.5 px-3.5",
                isOpen ? "bg-[#D1E9FF]" : "bg-transparent",
              )}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <span>
                    <img src="/assets/svg/filter.svg" />
                  </span>
                  <span className="text-base text-SC">Filter</span>
                </div>
                <div className="rounded-lg bg-[#D1E9FF] h-6 text-primary w-6">
                  3
                </div>
              </div>
            </button>

            <div
              className={clsx(
                "w-[420px] rounded-lg border border-solid outline-none px-3.5 py-2.5 flex gap-2 items-center",
                "border-[#2E90FA]",
              )}
            >
              <span>
                <img src="/assets/svg/search.svg" />
              </span>

              <input
                className="outline-none border-none w-full"
                type={"text"}
                placeholder={"Masukan Pencarian"}
                defaultValue={param.search ?? ""}
                onChange={(e) => handleInputChange("search", e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className={clsx(isOpen ? "flex gap-7" : "")}>
              <div className={clsx("w-[300px]", isOpen ? "block" : "hidden")}>
                <div className="">
                  <div>
                    <button className="bg-transparent border-none min-w-[300px]">
                      <div className="flex justify-between p-5 border-x-0 border-t border-b border-solid border-black/30">
                        <span className="text-lg text-SC">Category</span>
                        <span>
                          <img src="/assets/svg/popup-open.svg" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="p-3 mb-4 border-x-0 border-t-0 border-b border-solid border-black/30">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-3">
                        <span>
                          <img src="/assets/svg/core.svg" />
                        </span>
                        <span>Pemrograman</span>
                      </div>
                      <span>
                        <img src="/assets/svg/chevron-up-primary.svg" />
                      </span>
                    </div>
                    <div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={
                                (param?.category?.indexOf("pemrogramman") ??
                                  -1) > -1
                              }
                              onChange={(e) =>
                                handleInputChange("category", "pemrogramman")
                              }
                            />
                            <span className="text-base text-[#475467]">
                              Pemrograman Website
                            </span>
                          </div>
                          <span className="text-base text-[#475467]">512</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={
                                (param?.category?.indexOf("data-science") ??
                                  -1) > -1
                              }
                              onChange={(e) =>
                                handleInputChange("category", "data-science")
                              }
                            />
                            <span className="text-base text-[#475467]">
                              Data Science
                            </span>
                          </div>
                          <span className="text-base text-[#475467]">512</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-base text-[#475467]">
                              Framer
                            </span>
                          </div>
                          <span className="text-base text-[#475467]">512</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-base text-[#475467]">
                              WebFlow
                            </span>
                          </div>
                          <span className="text-base text-[#475467]">512</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 mb-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-3">
                        <span>
                          <img src="/assets/svg/core.svg" />
                        </span>
                        <span>Bisnis</span>
                      </div>
                      <span>
                        <img src="/assets/svg/popup-close.svg" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

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
                      <CardProduct key={`cv-${index}`} {...item} isCourses />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {isError && (
        <div className="h-64 flex justify-center items-center">
          <div>
            <p className="text-4xl m-0 mb-5 text-center">
              Belum ada kursus yang dapat diikuti
            </p>
            <p className="text-lg text-SC text-center">
              Mohon tunggu beberapa saat...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseView;
