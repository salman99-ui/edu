"use client";
import Checkbox from "@/shared/components/checkbox";
import Switch from "@/shared/components/switch";
import React from "react";
import useSettingHook from "../../hook/Profile/useSettingHook";

function Setting() {
  const {
    settingWa,
    settingEmail,
    handleChangeInputEmail,
    handleChangeInputWa,
  } = useSettingHook();

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="mb-4">
          <p className="text-SC text-2xl m-0 mb-4">
            Pengaturan pemberitahuan email
          </p>
          <div></div>
          <div>
            <Switch
              title={<span>Pemberitahuan email aktif</span>}
              isActive={settingEmail.active}
              onClick={() => handleChangeInputEmail("active")}
            />
          </div>
          <div className="">
            <Checkbox
              isActive={settingEmail.weekLearning}
              title="Laporan belajar kursus per minggu"
              onClick={() => handleChangeInputEmail("weekLearning")}
            />
          </div>
          <div>
            <Checkbox
              isActive={settingEmail.sertificate}
              title="Pencapaian sertifikat"
              onClick={() => handleChangeInputEmail("sertificate")}
            />
          </div>
          <div className="">
            <Checkbox
              isActive={settingEmail.recommend}
              title="Rekomendasi kursus terbaru"
              onClick={() => handleChangeInputEmail("recommend")}
            />
          </div>
        </div>
        <button
          type="submit"
          className={
            "inline-block w-[180px] text-white h-10 rounded-lg flex items-center justify-center gap-3 cursor-pointer bg-primary"
          }
        >
          <span>Simpan Pengaturan</span>
        </button>
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <p className="text-SC text-2xl m-0 mb-4">
            Pengaturan pemberitahuan whatsapp
          </p>
          <div className="">
            <Switch
              title={<span>Pemberitahuan whatsapp tidak aktif</span>}
              isActive={settingEmail.active}
              onClick={() => handleChangeInputWa("active")}
            />
          </div>
          <div className="">
            <Checkbox
              isActive={settingWa.byWa}
              title="Rekomendasi kursus terbaru"
              onClick={() => handleChangeInputWa("byWa")}
            />
          </div>
        </div>
        <button
          type="submit"
          className={
            "inline-block w-[180px] text-white h-10 rounded-lg flex items-center justify-center gap-3 cursor-pointer bg-primary"
          }
        >
          <span>Simpan Pengaturan</span>
        </button>
      </div>
    </div>
  );
}

export default Setting;
