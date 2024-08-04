class TokenUtils {
  getToken(): string {
    return localStorage.getItem("accessToken") || "";
  }

  setToken(token: string): void {
    localStorage.setItem("accessToken", token);
  }

  logout(): void {
    localStorage.removeItem("accessToken");
  }
}

export default new TokenUtils();
