type ProfileState = {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  phone_number: string;
  position: string;
};

type ReducerProfileAction = {
  type: "SET" | "DELETE";
  payload: ProfileState | null;
};
