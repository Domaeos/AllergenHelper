import axios, { AxiosInstance } from 'axios';
import { VITE_API_URL } from "../imports";


// Create an Axios instance with default configurations
export const axiosClient: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,  // Replace with your API base URL
  timeout: 10000,  // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',  // Default headers
  },
});