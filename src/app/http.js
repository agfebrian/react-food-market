import axios from "axios";
import { setToken, getToken } from "~/utils/storage";

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_URL_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

http.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      setToken("");
    }
    Promise.reject(error);
  },
);

export default http;
