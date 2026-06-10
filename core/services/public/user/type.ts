type LoginPayloadArgAPI = {
  email: string;
  password: string;
};

type LoginResponseAPI = {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  phone_number: string;
  position: string;
  token: string;
};

type LoginSuccessData = {
  data: LoginResponseAPI;
  status: number;
};
