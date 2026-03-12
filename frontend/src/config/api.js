// API Configuration
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  HEALTH: `${API_BASE_URL}/health`,
};
