import { useEffect } from "react";
import { useLocalStorage } from "~/hooks";
import { useNavigate, useLocation } from "react-router-dom";

export const Protected = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, _setToken] = useLocalStorage("token", "");

  useEffect(() => {
    if (
      !token &&
      location.pathname !== "/login" &&
      !location.pathname.includes("/register")
    ) {
      navigate("/login", { replace: true });
    } else if (
      (token && location.pathname === "/login") ||
      location.pathname.includes("/register")
    ) {
      navigate("/");
    }
  }, [token]);

  return children;
};
