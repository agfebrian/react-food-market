import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
