import { http } from "@/libs/http";

class UserService {
  search(keywords: string) {
    return http.get(`/users/search?keywords=${keywords}`);
  }
}

export default new UserService();
