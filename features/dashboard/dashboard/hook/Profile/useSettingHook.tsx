"use client";
import { useUpdateSettingMutation } from "@/core/services/app/course";
import { useDispatchCtxAlert } from "@/shared/context/notification";
import React, { useEffect, useState } from "react";

function useSettingHook() {
  const dispatch = useDispatchCtxAlert();

  const [settingEmail, setSettingEmail] = useState<SettingEmailState>({
    active: false,
    weekLearning: false,
    sertificate: false,
    recommend: false,
  });

  const [settingWa, setSettingWa] = useState<SettingWaState>({
    active: false,
    byWa: false,
  });

  const [updateSetting, { isLoading, isError, isSuccess }] =
    useUpdateSettingMutation();

  const handleChangeInputEmail = async (key: keyof SettingEmailState) => {
    let setting: SettingEmailState = { ...settingEmail };

    setting[key] = !settingEmail[key];
    setSettingEmail(setting);
    try {
      await updateSetting(key).unwrap();
      dispatch({
        type: "SET",
        PAYLOAD: {
          type: "success",
          title: "Setting Update",
          message: "Update Success",
        },
      });
    } catch {
      setting[key] = !settingEmail[key];
      dispatch({
        type: "SET",
        PAYLOAD: {
          type: "error",
          title: "Setting Update",
          message: "Update gagal",
        },
      });
    } finally {
      setSettingEmail(setting);
    }
  };

  const handleChangeInputWa = async (key: keyof SettingWaState) => {
    let setting: SettingWaState = { ...settingWa };

    setting[key] = !settingWa[key];
    setSettingWa(setting);
    try {
      await updateSetting(key).unwrap();
      dispatch({
        type: "SET",
        PAYLOAD: {
          type: "success",
          title: "Setting Update",
          message: "Update Success",
        },
      });
    } catch {
      setting[key] = !settingWa[key];
      dispatch({
        type: "SET",
        PAYLOAD: {
          type: "error",
          title: "Setting Update",
          message: "Update gagal",
        },
      });
    } finally {
      setSettingWa(setting);
    }
  };

  return {
    settingEmail,
    settingWa,
    isLoading,
    isError,
    isSuccess,
    updateSetting,
    setSettingEmail,
    handleChangeInputEmail,
    handleChangeInputWa,
  };
}

export default useSettingHook;
