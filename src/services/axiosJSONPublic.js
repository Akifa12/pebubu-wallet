import axios from "axios";
import { BACKEND_URL } from "./config";

export const axiosJSONPublic = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});