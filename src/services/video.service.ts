import { http } from "@/libs/http";

class VideoService {
  getAll() {
    return http.get("/videos");
  }

  toggleLike(id: string) {
    return http.post(`/videos/${id}/like`);
  }
}

export default new VideoService();
