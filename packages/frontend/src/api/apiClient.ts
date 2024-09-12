import axios, { AxiosInstance } from 'axios';
import { VITE_API_URL } from "@/imports";

const axiosClient: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;