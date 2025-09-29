import axios from "axios";
import { BACKEND_URL } from "./config";

export const axiosMultipartPublic = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});