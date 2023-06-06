import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Protected = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (location.pathname === "/login" && token) {
    useEffect(() => {
      navigate("/");
    }, []);
    return;
  }

  if (location.pathname === "/login" && !token) {
    return children;
  }

  if (location.pathname.includes("register") && token) {
    useEffect(() => {
      navigate("/");
    }, []);
    return;
  }

  if (location.pathname.includes("register") && !token) {
    return children;
  }

  if (!token) {
    useEffect(() => {
      navigate("/login");
    }, []);
  }

  return children;
};
