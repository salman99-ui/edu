"use client";
import React from "react";
import Input from "@/shared/components/InputForm";
import useFormHook from "../../hook/Profile/useFormHook";

function FormUser() {
  const { control, errors, handleSubmit, updateData } = useFormHook();

  return (
    <div>
      <div className="flex gap-10">
        <div className="p-[44px] flex items-center border border-solid border-[#E9EAF0] shadow-lg">
          <div className="w-[280px]">
            <div className="relative mb-5">
              <img
                src="/assets/svg/profile.svg"
                className="w-[280px] h-[280px] "
              />
              <div className="bg-black/45 p-3 absolute w-full bottom-0">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img src="/assets/svg/upload.svg" />
                  </span>
                  <span className="font-medium text-FC">Unggah foto diri</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-center text-SC font-medium">
                Ukuran gambar harus di bawah 1MB dan rasio gambar harus 1:1
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full flex gap-5 mb-5">
            <div className="flex-1">
              <Input
                name="first_name"
                placeholder="Masukan nama depan"
                title="Nama depan"
                type="text"
                control={control}
                error={errors}
                key={"first-name"}
              />
            </div>
            <div className="flex-1">
              <Input
                name="last_name"
                placeholder="Masukan nama belakang"
                title="Nama belakang"
                type="text"
                control={control}
                error={errors}
                key={"first-name"}
              />
            </div>
          </div>
          <div className="mb-5">
            <Input
              name="username"
              placeholder="Masukan username"
              title="Username"
              type="text"
              control={control}
              error={errors}
              key={"username"}
            />
          </div>

          <div className="mb-5">
            <Input
              name="email"
              placeholder="Masukan email"
              title="Email"
              type="text"
              control={control}
              error={errors}
              key={"email"}
            />
          </div>

          <div className="mb-5">
            <Input
              name="phone_number"
              placeholder="Masukan no hp"
              title="Nomor WhatApp"
              type="text"
              prefix={<span>+62</span>}
              control={control}
              error={errors}
              key={"wa"}
            />
          </div>

          <div className="mb-5">
            <Input
              name="position"
              placeholder="Masukan jabatan"
              title="Jabatan"
              type="text"
              control={control}
              error={errors}
              key={"wa"}
            />
          </div>
          <div>
            <button
              type="submit"
              className={
                "inline-block w-[180px] text-white h-10 rounded-lg flex items-center justify-center gap-3 cursor-pointer bg-primary"
              }
              onClick={handleSubmit(updateData, (e) => console.log(e))}
            >
              <span>Simpan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormUser;
