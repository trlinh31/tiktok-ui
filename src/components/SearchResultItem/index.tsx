import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { User } from "@/types";
import { avatarFakeURL } from "@/constants";

export default function SearchResultItem({ profile }: { profile: User }) {
  return (
    <>
      <div className='p-2'>
        <Link to={`/profile/${profile.nickname}`} className='w-full block hover:bg-hoverLight dark:hover:bg-hoverDark rounded-md'>
          <div className='flex items-center'>
            <img src={`${profile.avatar || avatarFakeURL}`} className='w-[40px] h-[40px] rounded-full' alt={profile.nickname} />
            <div className='flex flex-col ml-2'>
              <div className='truncate flex items-center'>
                <span>{profile.fullName}</span> <BadgeCheck size={16} color='#1D9BF0' className='ml-1' />
              </div>
              <div className='text-[12px] text-gray-500'>@{profile.nickname}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
