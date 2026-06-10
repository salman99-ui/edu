"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { PasswordSchema, ProfileSchema } from "../../validation/profile";

function usePasswordFormHook() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PasswordFormPayload>({
    mode: "onChange",
    defaultValues: {
      password: "",
      new_password: "",
      confirm_password: "",
    },
    resolver: joiResolver(PasswordSchema),
  });
  return {
    control,
    errors,
    handleSubmit,
  };
}

export default usePasswordFormHook;
