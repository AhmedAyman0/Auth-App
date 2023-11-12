import { ReactNode, useContext, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import { RegisterContext } from "../context/RegisterContext";
import userService from "../services/user.service";
import { useNavigate } from "react-router-dom";

type RegisterProps = {
  children?: ReactNode;
};
const Register = (props: RegisterProps) => {
  const { isFormSubmitted, setFormSubmmited } = useContext(RegisterContext);
  const { values, setValues } = useContext(RegisterContext);
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function loginUser() {
      setFormSubmmited(false);

      try {
        console.log("submittedValues", values);
        const resp = await userService.register(values);
        console.log("resp", resp);
        setAuthenticated(true);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
    if (isFormSubmitted) {
      loginUser();
    }
  }, [isFormSubmitted]);
  return (
    <>
      <RegisterForm></RegisterForm>
    </>
  );
};

export default Register;
