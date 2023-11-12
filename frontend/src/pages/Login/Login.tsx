import { ReactNode, useContext, useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import "./Login.css";
import { LoginFormContext } from "../../context/LoginFormContext";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
type LoginProps = {
  children?: ReactNode;
};
const Login = (props: LoginProps) => {
  const { isFormSubmitted, setFormSubmmited } = useContext(LoginFormContext);
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const { values, setValues } = useContext(LoginFormContext);
  const navigate = useNavigate();
  useEffect(() => {
    async function loginUser() {
      setFormSubmmited(false);

      try {
        const resp = await authService.login(values);
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
      <div className="login">
        <LoginForm></LoginForm>
      </div>
    </>
  );
};

export default Login;
