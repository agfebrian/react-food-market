import axios from "axios";

const http = axios.create({
  baseURL: "https://foodmarket-backend.buildwithangga.id/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
