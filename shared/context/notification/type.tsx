type ReducerAlertAction = {
  type: "SET" | "DELETE";
  PAYLOAD: StateAlertType | null;
};

type StateAlertType = {
  type: "success" | "error" | "warning" | "danger";
  title: string;
  message: string;
};

type AlertProviderType = { children: React.ReactNode };
