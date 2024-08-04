import PostAction from "@/components/PostAction";
import { Post as PostType } from "@/types";
import { useEffect, useRef, useState } from "react";
import useElementOnScreen from "@/hooks/useElementOnScreen";
import { BadgeCheck, Music } from "lucide-react";
import { SYMBOL } from "@/constants";

export default function Post({ post }: { post: PostType }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const options = { root: null, rootMargin: "0px", threshold: 0.7 };
  const isVisible = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      if (!playing) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing && videoRef.current) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisible, playing]);

  return (
    <>
      <div id={`post-${post.id}`}>
        <div className='flex flex-row items-start gap-x-4 py-[20px] relative mx-auto my-0 max-w-[500px] h-[calc(-60px+100vh)]'>
          <div className='relative w-full h-full cursor-pointer group'>
            <video ref={videoRef} id={`video-${post.id}`} className='w-full h-full rounded-large object-cover' controls loop playsInline>
              <source src={post.videoUrl} type='video/mp4' />
            </video>
            <div className='absolute left-0 bottom-0 right-0 p-5 text-white group-hover:bottom-16 duration-300 ease-out'>
              <h3 className='flex items-center'>
                {post.profile.username} <BadgeCheck size={16} color='#1D9BF0' className='ml-1' />
              </h3>
              <span className='text-[13px]'>
                {post?.description || "" + SYMBOL.SPACE + post.tags.map((tag) => `#${tag + SYMBOL.SPACE}`).join("")}
              </span>
              <span className='flex items-center mt-1'>
                <Music size={14} />
                <span className='ml-1 text-[13px] line-clamp-1'>{post.music}</span>
              </span>
            </div>
          </div>
          <PostAction post={post} />
        </div>
      </div>
    </>
  );
}
