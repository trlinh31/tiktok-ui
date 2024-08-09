import { http } from '@/libs/http';

class ProfileService {
  getProfile() {
    return http.get("/users/profile");
  }
}

export default new ProfileService();