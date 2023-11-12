import { createContext, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

type IRegisterContext = {
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
    name: "",
  },
  setValues: () => {},
};

const RegisterContext = createContext<IRegisterContext>(initialValue);

const RegisterProvider = ({ children }: Props) => {
  const [isFormSubmitted, setFormSubmmited] = useState(
    initialValue.isFormSubmitted
  );

  const [values, setValues] = useState(initialValue.values);

  return (
    <RegisterContext.Provider
      value={{ isFormSubmitted, setFormSubmmited, values, setValues }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterProvider };
