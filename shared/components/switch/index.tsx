"use client";
import clsx from "clsx";
import React from "react";

function Switch({ title, isActive, onClick }: SwitchProps) {
  return (
    <div className="flex gap-4 items-center mb-5">
      <label className="relative inline-block h-7 w-12 cursor-pointer">
        <input type="checkbox" className="peer sr-only" onClick={onClick} />
        <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-primary"></span>
        <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5"></span>
      </label>
      <span className={clsx(isActive ? "text-primary" : "text-disabled")}>
        {title}
      </span>
    </div>
  );
}

export default Switch;
