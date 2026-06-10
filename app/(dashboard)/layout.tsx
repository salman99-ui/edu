"use client"
import Footer from "@/shared/components/footer";
import Header from "@/shared/components/header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
