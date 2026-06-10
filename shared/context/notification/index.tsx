"use client";
import Alert from "@/shared/components/Alert";
import React, { useEffect } from "react";

const reducerAlert = (
  stateAlert: StateAlertType[],
  action: ReducerAlertAction,
): StateAlertType[] => {
  switch (action.type) {
    case "SET":
      if (!action.PAYLOAD) return stateAlert;
      return [...stateAlert, action.PAYLOAD];
    case "DELETE":
      return stateAlert.slice(1);
    default:
      return stateAlert;
  }
};

export const StateCtxAlert = React.createContext<StateAlertType[] | null>(null);
export const DispatchCtxAlert =
  React.createContext<React.Dispatch<ReducerAlertAction> | null>(null);

export const useStateCtxAlert = (): StateAlertType[] => {
  const data = React.useContext(StateCtxAlert);
  return data ?? [];
};

export const useDispatchCtxAlert = (): React.Dispatch<ReducerAlertAction> => {
  const dispatch = React.useContext(DispatchCtxAlert);
  if (!dispatch) {
    throw new Error("useDispatchCtxAlert should within AlertProvider");
  }
  return dispatch;
};

export const pushNotification = (data: ReducerAlertAction) => {
  const dispatch = React.useContext(DispatchCtxAlert);
  if (dispatch) dispatch(data);
};

export const AlertProvider = ({
  children,
}: AlertProviderType): React.ReactNode => {
  const [state, dispatch] = React.useReducer(reducerAlert, []);

  useEffect(() => {
    if (state.length > 0) {
      const timer = setTimeout(() => {
        dispatch({ type: "DELETE", PAYLOAD: null });
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <DispatchCtxAlert.Provider value={dispatch}>
      <StateCtxAlert.Provider value={state}>
        <div className="absolute top-0 min-w-screen ">
          <div
            className="absolute left-1/2 top-7"
            style={{ transform: "translate(-50%, 0%)" }}
          >
            {state.map((alert, index) => {
              switch (alert.type) {
                case "success":
                  return (
                    <Alert.Success
                      key={index}
                      title={alert.title}
                      message={alert.message}
                    />
                  );
                case "warning":
                  return (
                    <Alert.Warning
                      key={index}
                      title={alert.title}
                      message={alert.message}
                    />
                  );
                case "danger":
                  return (
                    <Alert.Danger
                      key={index}
                      title={alert.title}
                      message={alert.message}
                    />
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
        {children}
      </StateCtxAlert.Provider>
    </DispatchCtxAlert.Provider>
  );
};
