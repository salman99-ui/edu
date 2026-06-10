"use client";
import React from "react";
import useCountHook from "../../hook/Dashboard/useCountHook";

function Courses() {
  const { isLoading, isError, data } = useCountHook();

  if (isLoading)
    return (
      <div>
        <p className="font-medium text-3xl mb-6">Dashboard</p>
        <div className="grid grid-cols-3 gap-5">
          <div className="skeleton col-span-1 p-6 rounded-lg h-24"></div>
          <div className="skeleton col-span-1 p-6 rounded-lg h-24"></div>
          <div className="skeleton col-span-1 p-6 rounded-lg h-24"></div>
        </div>
      </div>
    );

  return (
    <div>
      <div>
        <p className="font-medium text-2xl mb-6">Dashboard</p>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1 bg-[#FEB27340] p-6 rounded-lg flex items-center gap-6">
            <span>
              <img src="/assets/svg/course-followed.svg" />
            </span>

            {!isError && (
              <>
                {data?.course_followed === 0 && (
                  <div>
                    <span className="text-SC text-base">
                      Belum ada kursus yang diikuti
                    </span>
                  </div>
                )}

                {(data?.course_followed as number) > 0 && (
                  <div>
                    <p className="text-base font-medium text-SC m-0 mb-2">
                      {data?.course_followed ?? 0}
                    </p>
                    <span className="text-SC text-base">Kursus diikuti</span>
                  </div>
                )}
              </>
            )}

            {isError && (
              <div>
                <span className="text-SC text-base">
                  Belum ada kursus yang diikuti
                </span>
              </div>
            )}
          </div>

          <div className="col-span-1 bg-[#84CAFF40] p-6 rounded-lg flex items-center gap-6">
            <span>
              <img src="/assets/svg/course-active.svg" />
            </span>

            {!isError && (
              <>
                {data?.course_active === 0 && (
                  <div>
                    <span className="text-SC text-base">
                      Belum ada kursus yang diikuti
                    </span>
                  </div>
                )}

                {(data?.course_active as number) > 0 && (
                  <div>
                    <p className="text-base font-medium text-SC m-0 mb-2">
                      {data?.course_active ?? 0}
                    </p>
                    <span className="text-SC text-base">Kursus diikuti</span>
                  </div>
                )}
              </>
            )}

            {isError && (
              <div>
                <span className="text-SC text-base">
                  Belum ada kursus yang diikuti
                </span>
              </div>
            )}
          </div>
          <div className="col-span-1 bg-[#6CE9A640] p-6 rounded-lg flex items-center gap-6">
            <span>
              <img src="/assets/svg/course-completed.svg" />
            </span>

            {!isError && (
              <>
                {data?.course_completed === 0 && (
                  <div>
                    <span className="text-SC text-base">
                      Belum ada kursus yang diikuti
                    </span>
                  </div>
                )}

                {(data?.course_completed as number) > 0 && (
                  <div>
                    <p className="text-base font-medium text-SC m-0 mb-2">
                      {data?.course_completed ?? 0}
                    </p>
                    <span className="text-SC text-base">Kursus diikuti</span>
                  </div>
                )}
              </>
            )}

            {isError && (
              <div>
                <span className="text-SC text-base">
                  Belum ada kursus yang diikuti
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
