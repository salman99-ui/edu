import React from "react";

const reducerProfile = (
  stateProfile: ProfileState | null,
  action: ReducerProfileAction,
): ProfileState | null => {
  switch (action.type) {
    case "SET":
      return { ...action.payload } as ProfileState;
    case "DELETE":
      return null;
    default:
      return stateProfile;
  }
};

export const StateCtxProfile = React.createContext<ProfileState | null>(null);
export const DispatchCtxProfile =
  React.createContext<React.Dispatch<ReducerProfileAction> | null>(null);

export const useStateCtxProfile = (): ProfileState | null => {
  const data = React.useContext(StateCtxProfile);
  return data;
};

export const useDispatchCtxProfile = (): React.Dispatch<ReducerProfileAction> => {
  const dispatch = React.useContext(DispatchCtxProfile);
  if (!dispatch) {
    throw new Error("useDispatchCtxAlert should inside ProfileProvider");
  }
  return dispatch;
};

export const ProfileProvider = ({ children }: any): React.ReactNode => {
  const [state, dispatch] = React.useReducer(reducerProfile, null);

  return (
    <DispatchCtxProfile.Provider value={dispatch}>
      <StateCtxProfile.Provider value={state}>
        {children}
      </StateCtxProfile.Provider>
    </DispatchCtxProfile.Provider>
  );
};

