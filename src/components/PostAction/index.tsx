import { Post } from "@/types";
import { Bookmark, Heart, MessageCircleMore, Plus, Share2 } from "lucide-react";
import StringUtils from "@/utils/string.util";

export default function PostAction({ post }: { post: Post }) {
  return (
    <>
      <div className='flex flex-col h-full items-center justify-end'>
        <ul className='space-y-5'>
          <li>
            <div className='relative w-[50px] h-[50px]'>
              <img src={post.profile.avatar} className='w-full h-full object-cover rounded-full' loading='lazy' alt={post.profile.username} />
              <button className='flex items-center justify-center absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 border-none outline-none rounded-full w-[20px] h-[20px] bg-primary'>
                <Plus color='white' size={14} />
              </button>
            </div>
          </li>
          <li>
            <button className='flex items-center justify-center rounded-full w-[50px] h-[50px] my-0.5 bg-gray-200 p-2 cursor-pointer'>
              <Heart />
            </button>
            <p className='text-center text-[13px]'>
              <strong>{StringUtils.formatNumber(post.hearts)}</strong>
            </p>
          </li>
          <li>
            <button className='flex items-center justify-center rounded-full w-[50px] h-[50px] my-0.5 bg-gray-200 p-2 cursor-pointer'>
              <MessageCircleMore />
            </button>
            <p className='text-center text-[13px]'>
              <strong>{StringUtils.formatNumber(post.comments)}</strong>
            </p>
          </li>
          <li>
            <button className='flex items-center justify-center rounded-full w-[50px] h-[50px] my-0.5 bg-gray-200 p-2 cursor-pointer'>
              <Bookmark />
            </button>
            <p className='text-center text-[13px]'>
              <strong>{StringUtils.formatNumber(post.saves)}</strong>
            </p>
          </li>
          <li>
            <button className='flex items-center justify-center rounded-full w-[50px] h-[50px] my-0.5 bg-gray-200 p-2 cursor-pointer'>
              <Share2 />
            </button>
            <p className='text-center text-[13px]'>
              <strong>{StringUtils.formatNumber(post.shares)}</strong>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
