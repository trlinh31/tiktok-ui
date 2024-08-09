class TokenUtils {
  getToken(name: string): string {
    return localStorage.getItem(name) || "";
  }

  setToken(name: string, token: string): void {
    localStorage.setItem(name, token);
  }

  logout(): void {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}

export default new TokenUtils();
