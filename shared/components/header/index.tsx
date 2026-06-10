"use client";
import { useStateCtxProfile } from "@/shared/context/profile";
import React from "react";

function Header() {
  const data = useStateCtxProfile() as ProfileState;

  return (
    <div className="w-full flex px-[100px] py-6 items-center justify-between border-x border-t-0 border-b border-solid border-black/30">
      <div className="">
        <img src="/assets/svg/logo.svg" />
      </div>

      <div className="flex gap-5 items-center">
        <span>
          <img src="/assets/svg/notification.svg" />
        </span>
        <div className="flex gap-5 items-center">
          <span>
            <img src="/assets/svg/photos.svg" width={48} />
          </span>
          <span>
            {data?.first_name} {data?.last_name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
