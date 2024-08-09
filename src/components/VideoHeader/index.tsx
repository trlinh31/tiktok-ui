import { avatarFakeURL, SYMBOL } from "@/constants";
import { Video } from "@/types";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";

export default function VideoHeader({ video }: { video: Video }) {
  return (
    <div className='flex justify-between gap-[10px]'>
      <div className='absolute left-0'>
        <Link to={"/"}>
          <div className='w-[56px] h-[56px] flex items-center justify-center rounded-full overflow-hidden'>
            <img src={video.user.avatar || avatarFakeURL} className='w-full h-full object-cover' alt={video.user.nickname} />
          </div>
        </Link>
      </div>
      <div className='flex-1'>
        <div>
          <Link to={"/"}>
            <h3 className='text-[18px] font-bold line-clamp-1'>@{video.user.nickname}</h3>
          </Link>
        </div>
        <div className='w-full line-clamp-2'>
          {video.description}
          {SYMBOL.SPACE}
          {video.tags.length > 0 && <span className='text-[#3b82f6]'>#{video.tags.join(" #")}</span>}
        </div>
      </div>
      <div className='mt-1 flex-1 text-end'>
        <Button variant='bordered' color='primary' className='text-[16px] font-bold' radius='none'>
          Follow
        </Button>
      </div>
    </div>
  );
}
