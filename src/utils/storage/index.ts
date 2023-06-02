export const getToken = (): string => {
  return localStorage.getItem("token") || "";
};

export const setToken = (value: string): void => {
  localStorage.setItem("token", value);
};
