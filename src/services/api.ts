import axios from 'axios';
import { setupCache } from "axios-cache-interceptor";

// const api = axios.create({
//   baseURL: 'https://manga-new-server.vercel.app',
//   timeout: 5000,
// });

const api = setupCache(
  axios.create({
    baseURL: "https://manga-new-server.vercel.app", // Replace with your API URL
  })
);

// Add request and response interceptors
api.interceptors.request.use((config) => {
  // Add auth tokens if needed
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default api;
