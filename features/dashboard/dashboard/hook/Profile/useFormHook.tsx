"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { ProfileSchema } from "../../validation/profile";
import {
  useDispatchCtxProfile,
  useStateCtxProfile,
} from "@/shared/context/profile";

function useFormHook() {
  const data = useStateCtxProfile() ?? {};
  const dispatch = useDispatchCtxProfile();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormPayload>({
    mode: "onChange",
    defaultValues: {
      ...data,
    },
    resolver: joiResolver(ProfileSchema),
  });

  const updateData = (value: ProfileFormPayload) => {
    dispatch({
      type: "SET",
      payload: value,
    });
  };

  return {
    control,
    errors,
    handleSubmit,
    updateData
  };
}

export default useFormHook;
