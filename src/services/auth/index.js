import http from "../../app/http";

export const fetchProfile = async () => {
  const data = await http.get("/auth/profile");
  return data;
};
