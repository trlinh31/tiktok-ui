import { http } from "@/libs/http";

class AuthService {
  login(payload: { email: string; password: string }) {
    return http.post("/auth/login", payload);
  }

  register(payload: { fullName: string; nickname: string; email: string; password: string }) {
    return http.post("/auth/register", payload);
  }

  refreshToken(payload: { refreshToken: string }) {
    return http.post("/auth/refreshToken", payload);
  }
}

export default new AuthService();
