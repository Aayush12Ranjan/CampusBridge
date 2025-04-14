
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Update with deployed backend URL if needed
  timeout: 10000, // Set timeout to prevent hanging requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to attach token automatically
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  }
);

// Interceptor to handle responses & errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle known errors (e.g., Unauthorized, Not Found, etc.)
      console.error("API Error:", error.response.status, error.response.data);
      if (error.response.status === 401) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login page
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
      alert("No response from the server. Please try again.");
    } else {
      console.error("Request Error:", error.message);
      alert("An error occurred. Please try again.");
    }
    return Promise.reject(error);
  }
);

export default API;