"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/core/config/store";
import { ProfileProvider } from "@/shared/context/profile";
import { AlertProvider } from "@/shared/context/notification";

function ProviderStore({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ProfileProvider>
        <AlertProvider>{children}</AlertProvider>
      </ProfileProvider>
    </Provider>
  );
}

export default ProviderStore;
