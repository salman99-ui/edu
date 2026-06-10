"use client";
import React from "react";

function Alert({ children }: { children: React.ReactNode }) {
  return <div className="min-w-[200px]">{children}</div>;
}

Alert.Success = ({ title, message }: AlertProps) => {
  return (
    <div className="border border-solid border-[#04B200] rounded-lg px-3 py-2 bg-[#E6F8E5] mb-3 min-w-[200px]">
      <div className="flex items-center gap-2">
        <span>
          <img src="/assets/svg/checked-filled.svg" alt="" />
        </span>
        <div>
          <span className="block font-semibold">{title}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

Alert.Danger = ({ title, message }: AlertProps) => {
  return (
    <div className="border border-solid border-[#FF0000] rounded-lg px-3 py-2 bg-[#FFECEC]  mb-3 min-w-[200px]">
      <div className="flex items-center gap-4">
        <span>
          <img src="/assets/svg/error.svg" alt="" />
        </span>
        <div>
          <span className="block font-semibold">{title}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

Alert.Warning = ({ title, message }: AlertProps) => {
  return (
    <div className="border border-solid border-[#FFA500] rounded-lg px-3 py-2 bg-[#FFF8E1]  mb-3 min-w-[200px]">
      <div className="flex items-center gap-2">
        <span>
          <img src="/assets/svg/warning.svg" alt="" />
        </span>
        <div>
          <span className="block font-semibold">{title}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

Alert.Danger = ({ title, message }: AlertProps) => {
  return (
    <div className="border border-solid border-[#FF0000] rounded-lg px-3 py-2 bg-[#FFECEC]  mb-3 min-w-[200px]">
      <div className="flex items-center gap-2">
        <span>
          <img src="/assets/svg/error.svg" alt="" />
        </span>
        <div>
          <span className="block font-semibold">{title}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
