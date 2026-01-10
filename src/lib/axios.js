import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",  // Set your backend API base URL here ,this helps in making requests to the backend server
  withCredentials: true,  // Enable sending cookies with requests,necessary for authentication when using cookies
});