import axios from "axios";
import { getToken } from "../utils/storage";

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
  (error) => Promise.reject(error)
);

export default http;
