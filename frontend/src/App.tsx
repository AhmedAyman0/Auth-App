import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { AuthProvider } from "./context/AuthContext";
import { RegisterProvider } from "./context/RegisterContext";
import { LoginFormProvider } from "./context/LoginFormContext";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <RegisterProvider>
            <LoginFormProvider>
              <AuthProvider>
                <Navbar></Navbar>
                <Routes></Routes>
              </AuthProvider>
            </LoginFormProvider>
          </RegisterProvider>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
}

export default App;
