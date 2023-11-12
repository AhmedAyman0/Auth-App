import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-content-between">
        <div>Logo</div>
        <div>
          {!authenticated ? (
            <>
              <div className="non-auth-actions">
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
              </div>
            </>
          ) : (
            ""
          )}
          {authenticated ? (
            <div
              onClick={() => {
                setAuthenticated(false);
                navigate("/");
              }}>
              Logout
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
