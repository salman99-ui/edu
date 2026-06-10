type ProfileFormPayload = {
  first_name: string;
  last_name: string;
  user_name: string;
  phone_number: string;
  email: string;
  position: string;
};

type PasswordFormPayload = {
  password: string;
  new_password: string;
  confirm_password: string;
};

type SettingEmailState = {
  active: boolean;
  weekLearning: boolean;
  sertificate: boolean;
  recommend: boolean;
};

type SettingWaState = {
  active: boolean;
  byWa: boolean;
};
