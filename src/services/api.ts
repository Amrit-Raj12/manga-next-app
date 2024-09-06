import axios from 'axios';

const api = axios.create({
  baseURL: 'https://manga-api-v1.vercel.app',
  timeout: 5000,
});

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
