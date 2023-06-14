import { useEffect } from "react";
import { useLocalStorage } from "../../hooks";
import { useNavigate, useLocation } from "react-router-dom";

export const Protected = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, _setToken] = useLocalStorage("token", "");

  if (!token) {
    useEffect(() => {
      if (
        location.pathname != "/login" &&
        !location.pathname.includes("/register")
      ) {
        navigate("/login");
      }
    }, []);
  } else {
    useEffect(() => {
      if (
        location.pathname == "/login" ||
        location.pathname.includes("/register")
      ) {
        navigate("/");
      }
    });
  }
  return children;
};
