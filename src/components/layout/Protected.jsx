import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Protected = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

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
};
