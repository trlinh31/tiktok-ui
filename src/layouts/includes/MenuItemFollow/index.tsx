import { avatarFakeURL } from "@/constants";
import { Profile } from "@/types";
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function MenuItemFollow({ profile }: { profile: Profile }) {
  return (
    <>
      <div className='dark:hover:bg-hoverDark hover:bg-hoverLight p-[8px]'>
        <Link to={`/profile/${profile.username}`} className='flex items-center gap-x-2'>
          <img src={`${profile.avatar || avatarFakeURL}`} className='w-[36px] h-[36px] rounded-full object-cover' alt={profile.username} />
          <div className='flex flex-col'>
            <div className='hidden lg:flex items-center lg:gap-x-1 font-bold text-[15px]'>
              <span>{profile.fullName}</span> <BadgeCheck size={16} color='#1D9BF0' className='ml-1' />
            </div>
            <div className='hidden lg:block text-[12px] text-gray-500'>@{profile.username}</div>
          </div>
        </Link>
      </div>
    </>
  );
}
