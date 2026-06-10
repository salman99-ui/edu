type FormFieldError = {
  message: string;
};

type FormInputProps = {
  title: string;
  placeholder: string;
  name: string;
  control?: any;
  type?: "text" | "password";
  errMsg?: string;
  prefix?: React.ReactNode;
  error:
    | {}
    | {
        [key: string]: FormFieldError;
      };
};
