"use client";
import React from "react";
import Input from "@/shared/components/InputForm";
import usePasswordFormHook from "../../hook/Profile/useFormPasswordHook";

function ChangePassword() {
  const {
    control: controlP,
    errors: errorsP,
    handleSubmit: handleSubmitP,
  } = usePasswordFormHook();

  return (
    <div>
      <p className="text-2xl mb-6">Ubah Password</p>
      <div className="mb-5">
        <Input
          name="password"
          placeholder="Masukan Password"
          title="Password"
          type="password"
          control={controlP}
          error={errorsP}
          key={"wa"}
        />
      </div>

      <div className="mb-5">
        <Input
          name="new_password"
          placeholder="Masukan Password"
          title="Password Baru"
          type="password"
          control={controlP}
          error={errorsP}
          key={"wa"}
        />
      </div>

      <div className="mb-5">
        <Input
          name="confirm_password"
          placeholder="Masukan Password"
          title="Konfirmasi Password"
          type="password"
          control={controlP}
          error={errorsP}
          key={"wa"}
        />
      </div>
      <div>
        <button
          type="submit"
          className={
            "inline-block w-[180px] text-white h-10 rounded-lg flex items-center justify-center gap-3 cursor-pointer bg-primary"
          }
          onClick={handleSubmitP(
            (e) => console.log(e),
            (e) => console.log(e),
          )}
        >
          <span>Ubah Password</span>
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
