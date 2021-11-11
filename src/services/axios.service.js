import axios from "axios";
import authHeader from "./auth-header";

const apiUrl = "http://localhost:5000/";

export const authAxios = axios.create({
  baseURL: apiUrl,
  headers: authHeader(),
});
export const publicAxios = axios.create({
  baseURL: apiUrl,
});
