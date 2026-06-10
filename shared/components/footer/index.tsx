"use client";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#101828]">
      <div className="py-20 px-[100px] mb-5">
        <div className="flex gap-5 justify-between items-center">
          <div>
            <div className="mb-7">
              <img src="/assets/svg/logo.svg" />
            </div>
            <div className="mb-5">
              <p className="font-medium text-[#FCFCFD]">
                Tingkatkan kemampuanmu, raih masa depan lebih baik
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/assets/svg/linkedin.svg" style={{ width: 70 }} />
              <img src="/assets/svg/ig.svg" />
              <img src="/assets/svg/fb.svg" />
              <img src="/assets/svg/yt.svg" />
              <img src="/assets/svg/x.svg" />
            </div>
          </div>
          <div>
            <p className="text-[#FCFCFD] text-lg m-0 mb-5">
              4 Kategori teratas
            </p>
            <p className="text-FC mb-4">Pemrograman</p>
            <p className="text-FC mb-4">Keuangan</p>
            <p className="text-FC mb-4">Desain</p>
            <p className="text-FC">Bisnis</p>
          </div>
          <div>
            <p className="text-[#FCFCFD] text-lg m-0 mb-5">Tautan</p>
            <p className="text-FC mb-4">Tentang Kami</p>
            <p className="text-FC mb-4">Kontak Kami</p>
            <p className="text-FC mb-4">Bergabung dengan kami</p>
          </div>
          <div>
            <p className="text-[#FCFCFD] text-lg m-0 mb-5">Bantuan</p>
            <p className="text-FC mb-4">Pusat bantuan</p>
            <p className="text-FC mb-4">FAQs</p>
            <p className="text-FC mb-4">Syarat & ketentuan</p>
            <p className="text-FC mb-4">Kebijakan privasi</p>
          </div>
          <div>
            <p className="text-[#FCFCFD] text-lg m-0 mb-5">
              Download EduRise di
            </p>
            <div className="mb-4">
              <img src="/assets/svg/app-store.svg" />
            </div>
            <div className="">
              <img src="/assets/svg/play-store.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-6 border-x-0 border-t border-b-0 border-solid border-white/35">
        <p className="text-FC">© 2025 - EduRise. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
