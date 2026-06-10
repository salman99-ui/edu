"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

function Index({
  title,
  placeholder,
  name,
  control,
  type = "text",
  prefix,
  error,
}: FormInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [typeInput, setTypeInput] = useState(type);

  const handleFocus = () => {
    setIsFocus((prev) => !prev);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <div>
          <div className="mb-3">
            <span className="">{title}</span>
          </div>
          <div
            className={clsx(
              "rounded-lg border border-solid outline-none px-3.5 py-2.5 w-full flex gap-2 items-center",
              isFocus ? "border-[#2E90FA]" : "",
              name in error ? "mb-3 border-red-500" : ""
            )}
          >
            {prefix && <>{prefix}</>}

            <input
              className="outline-none border-none w-full"
              type={typeInput}
              placeholder={placeholder}
              value={value}
              onFocus={handleFocus}
              onBlur={() => {
                onBlur();
                handleFocus();
              }}
              onChange={onChange}
            />

            {type === "password" && (
              <span className="flex items-center">
                <button
                  className="border-none bg-transparent outline-none cursor-pointer"
                  onClick={() =>
                    setTypeInput((prev) =>
                      prev === "password" ? "text" : "password",
                    )
                  }
                >
                  <img src="/assets/svg/eye.svg" />
                </button>
              </span>
            )}
          </div>

          {error && name in error && (
            <p className="sora text-xs text-red-400">
              {(error as Record<string, { message: string }>)[name].message}
            </p>
          )}
        </div>
      )}
    />
  );
}

export default Index;
