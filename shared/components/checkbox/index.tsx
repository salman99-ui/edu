"use client";
import clsx from "clsx";
import React from "react";

function Checkbox({ isActive, title, onClick }: CheckBoxProps) {
  return (
    <div className="flex gap-4 items-center mb-5">
      <input type="checkbox" onClick={onClick} />
      <span className={clsx(isActive ? "text-primary" : "text-disabled")}>
        {title}
      </span>
    </div>
  );
}

export default Checkbox;
