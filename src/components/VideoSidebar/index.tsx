import { Video } from "@/types";
import { Bookmark, Heart, MessageCircleMore, Share2 } from "lucide-react";
import StringUtils from "@/utils/string.util";
import videoService from "@/services/video.service";
import { HttpStatusCode } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, selectProfile } from "@/redux/features/authentication/authSelectors";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function VideoSidebar({ video }: { video: Video }) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const profile = useSelector(selectProfile);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const handleToggleLike = async () => {
    if (!isAuthenticated) {
      toast.error("Vui lòng đăng nhập để thực hiện hành động này");
      return;
    }
    try {
      const response = await videoService.toggleLike(video._id);
      if (response.status === HttpStatusCode.Ok) {
        const { content } = response.data;
        video.likesCount = content.likesCount;
        setIsLiked(!isLiked);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (profile) {
      const hasLiked = video.likes.includes(profile._id);
      setIsLiked(hasLiked);
    } else {
      setIsLiked(false);
    }
  }, [profile, dispatch]);

  return (
    <>
      <div className='flex flex-col h-full items-center justify-end'>
        <ul className='space-y-3'>
          <li>
            <button
              className='flex items-center justify-center rounded-full w-[50px] h-[50px] my-0.5 bg-gray-200 dark:bg-hoverDark p-2 cursor-pointer'
              onClick={() => handleToggleLike()}>
              <Heart fill={isLiked ? "#fe2c55" : "#fff"} size={24} />
            </button>
            <p className='text-center text-[13px]'>
              <strong>{StringUtils.formatNumber(video.likesCount)}</strong>
            </p>
          </li>
          <li>
            <button className='flex items-center justify-center rounded-full w-[50px] h-[50px] my-0.5 bg-gray-200 dark:bg-hoverDark p-2 cursor-pointer'>
              <MessageCircleMore fill='#fff' strokeWidth={1.75} />
            </button>
            <p className='text-center text-[13px]'>
              <strong>{StringUtils.formatNumber(video.commentsCount)}</strong>
            </p>
          </li>
          <li>
            <button className='flex items-center justify-center rounded-full w-[50px] h-[50px] my-0.5 bg-gray-200 dark:bg-hoverDark p-2 cursor-pointer'>
              <Bookmark fill='#fff' />
            </button>
            <p className='text-center text-[13px]'>
              <strong>{StringUtils.formatNumber(0)}</strong>
            </p>
          </li>
          <li>
            <button className='flex items-center justify-center rounded-full w-[50px] h-[50px] my-0.5 bg-gray-200 dark:bg-hoverDark p-2 cursor-pointer'>
              <Share2 fill='#fff' />
            </button>
            <p className='text-center text-[13px]'>
              <strong>{StringUtils.formatNumber(0)}</strong>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
