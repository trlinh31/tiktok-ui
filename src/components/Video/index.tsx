import { useEffect, useRef, useState } from "react";
import useElementOnScreen from "@/hooks/useElementOnScreen";
import { Video as VideoType } from "@/types";
import VideoSidebar from "@/components/VideoSidebar";
import VideoHeader from "@/components/VideoHeader";

export default function Video({ video }: { video: VideoType }) {
  const [playing, setPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisible = useElementOnScreen(options, videoRef);
  const onVideoClick = () => {
    if (playing && videoRef.current) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      if (videoRef.current) {
        videoRef.current.play();
        setPlaying(!playing);
      }
    }
  };
  useEffect(() => {
    if (isVisible && videoRef.current) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing && videoRef.current) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisible]);

  return (
    <>
      <div id={`video-${video._id}`} className='max-w-[692px] h-[670px] flex flex-row items-start my-[20px] relative mx-auto'>
        <div className='ml-[68px] w-[624px] flex-[1_1_624px] h-full flex flex-col'>
          <VideoHeader video={video} />
          <div className='flex flex-row items-end h-full'>
            <div className='relative bg-cover mr-[20px] w-[292px] h-[600px] lg:h-[calc(316.667px + 17.3611vw)]' role='button'>
              <div className='absolute top-0 left-0 w-full h-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] overflow-hidden rounded-large'>
                <video
                  ref={videoRef}
                  src={video.videoUrl}
                  className='absolute top-0 left-0 right-0 bottom-0 block w-full h-full object-cover'
                  onClick={onVideoClick}
                  controls
                  preload='true'
                  loop
                  playsInline
                />
              </div>
            </div>
            <VideoSidebar video={video} />
          </div>
        </div>
      </div>
    </>
  );
}
