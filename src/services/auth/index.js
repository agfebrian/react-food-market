import http from "~/app/http";

export const fetchProfile = async () => {
  const data = await http.get("/auth/profile");
  return data;
};

export const updatePhoto = async (payload) => {
  const data = await http.patch("/auth/profile-photo", payload, {
    headers: { "Content-Type": "x-www-form-urlencoded" },
  });
  return data;
};
