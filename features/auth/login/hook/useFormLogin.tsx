"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { LoginSchema } from "../validation";

function useFormLogin() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<LoginPayloadArg>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(LoginSchema),
  });
  return {
    control,
    errors,
    handleSubmit,
  };
}

export default useFormLogin;
