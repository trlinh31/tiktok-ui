import authService from "@/services/auth.service";
import tokenUtil from "@/utils/token.util";
import axios from "axios";
import { HttpStatusCode } from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === HttpStatusCode.Unauthorized && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = tokenUtil.getToken("refreshToken");
        if (!refreshToken) {
          return Promise.reject(error);
        }

        const payload = { refreshToken };
        const response = await authService.refreshToken(payload);

        if (response.status === HttpStatusCode.Ok) {
          const { accessToken } = response.data.content;
          tokenUtil.setToken("accessToken", accessToken);
          originalRequest.headers["Authorization"] = "Bearer " + accessToken;
          return http(originalRequest);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
