import axios from "axios";
const BASE_URL = "https://api.groceteria.dev/api/v1/";
// const BASE_URL = "http://localhost:8000/api/v1/";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
