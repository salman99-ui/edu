"use client";
import React from "react";
import Input from "@/shared/components/InputForm";

import useFormLogin from "@/features/auth/login/hook/useFormLogin";
import useLoginHook from "@/features/auth/login/hook/useLoginHook";
import Loading from "@/shared/components/loading";
import clsx from "clsx";

function LoginPage() {
  const { control, errors, handleSubmit } = useFormLogin();
  const {
    handleSubmitForm,
    api: { isLoading },
  } = useLoginHook();

  return (
    <div>
      <div className="pt-[100px] flex">
        <div className="flex">
          <img src="/assets/svg/login-logo.svg" />
        </div>
        <div>
          <div>
            <p className="text-[#2E90FA] text-[72px] font-semibold">EduRise</p>
            <p className="text-[28px]">
              Tingkatkan kemampuanmu, raih masa depan lebih baik
            </p>
            <div>
              <p className="text-[44px] text-black font-semibold">Masuk</p>
              <div className="mb-5">
                <Input
                  name="email"
                  title="Email"
                  type="text"
                  placeholder="Masukan Email Anda..."
                  prefix={
                    <span>
                      <img src="/assets/svg/mail.svg" />
                    </span>
                  }
                  control={control}
                  error={errors}
                />
              </div>
              <div className="mb-6">
                <Input
                  name="password"
                  title="Password"
                  placeholder="Masukan Password Anda..."
                  type="password"
                  control={control}
                  error={errors}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={clsx(
                    "w-full text-white h-10 rounded-lg flex items-center justify-center gap-3 cursor-pointer",
                    isLoading ? "bg-[#98A2B3]" : "bg-primary",
                  )}
                  disabled={isLoading}
                  onClick={handleSubmit(handleSubmitForm, (e) =>
                    console.log(e),
                  )}
                >
                  {isLoading && <Loading />}
                  <span>{isLoading ? "Harap Tunggu" : "Masuk"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
