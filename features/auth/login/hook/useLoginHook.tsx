"use client";
import { useLoginUserMutation } from "@/core/services/public/user";
import {
  pushNotification,
  useDispatchCtxAlert,
} from "@/shared/context/notification";
import { useDispatchCtxProfile } from "@/shared/context/profile";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function useLoginHook() {
  const route = useRouter();
  const dispatch = useDispatchCtxAlert();
  const dispatchP = useDispatchCtxProfile();

  const [loginUser, { isLoading, isSuccess, isError, data }] =
    useLoginUserMutation();

  const handleSubmitForm = (data: LoginPayloadArg) => {
    loginUser(data);
  };

  useEffect(() => {
    if (isError) {
      dispatch({
        type: "SET",
        PAYLOAD: {
          type: "danger",
          message: "Email / Password anda salah",
          title: "Error",
        },
      });
    }

    if (isSuccess) {
      const { token, ...profileData } = data || {};
      localStorage.setItem("token-app", token ?? "");

      dispatchP({
        type: "SET",
        payload: profileData,
      });
      dispatch({
        type: "SET",
        PAYLOAD: {
          type: "success",
          message: "Success",
          title: "Login",
        },
      });
      route.replace("/dashboard");
    }
  }, [isError, isSuccess]);

  return {
    handleSubmitForm,
    api: {
      isLoading,
      isSuccess,
      isError,
    },
  };
}

export default useLoginHook;
