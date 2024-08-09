import Video from "@/components/Video";
import { setLoading } from "@/redux/features/loading/loadingSlice";
import videoService from "@/services/video.service";
import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    dispatch(setLoading(true));
    try {
      const response = await videoService.getAll();
      const { status, content } = response.data;

      if (status === HttpStatusCode.Ok) {
        setVideos(content);
      }
    } catch (error) {
      toast.error(t("error.ERROR_FETCH_VIDEO"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      {videos.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </>
  );
}
