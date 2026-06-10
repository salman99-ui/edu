"use client";
import React from "react";

function Progress({ progress }: ProgressProps) {
  return (
    <div className="flex gap-10 items-center">
      {progress < 100 && (
        <>
          <div className="h-2 rounded-lg bg-[#D1E9FF] w-full relative">
            <div className="h-2 bg-primary inline-block w-1/3 absolute left-0 top-0 rounded-lg"></div>
          </div>
          <span className="text-primary font-medium">{progress}%</span>
        </>
      )}
      {progress === 100 && (
        <>
          <div className="h-2 rounded-lg bg-[#D1E9FF] w-full relative">
            <div className="h-2 bg-[#12B76A] inline-block w-full z-10 absolute left-0 top-0 rounded-lg"></div>
          </div>
          <span className="text-[#12B76A] font-medium">{progress}%</span>
        </>
      )}
    </div>
  );
}

export default Progress;
