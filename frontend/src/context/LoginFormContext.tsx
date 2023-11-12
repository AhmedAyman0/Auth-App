import { createContext, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

type ILoginFormContext = {
  isFormSubmitted: boolean;
  setFormSubmmited: (newState: boolean) => void;
  values: any;
  setValues: (newState: any) => void;
};

const initialValue = {
  isFormSubmitted: false,
  setFormSubmmited: () => {},
  values: {
    email: "",
    password: "",
  },
  setValues: () => {},
};

const LoginFormContext = createContext<ILoginFormContext>(initialValue);

const LoginFormProvider = ({ children }: Props) => {
  const [isFormSubmitted, setFormSubmmited] = useState(
    initialValue.isFormSubmitted
  );

  const [values, setValues] = useState(initialValue.values);

  return (
    <LoginFormContext.Provider
      value={{ isFormSubmitted, setFormSubmmited, values, setValues }}>
      {children}
    </LoginFormContext.Provider>
  );
};

export { LoginFormContext, LoginFormProvider };
