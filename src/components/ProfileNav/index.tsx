import { CloudUpload, LogOut, MessageSquareText, Moon, Send, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileNav() {
  return (
    <>
      <div className='flex items-center gap-x-5'>
        <Link to={"/upload"}>
          <CloudUpload />
        </Link>
        <Link to={"/messages"}>
          <Send />
        </Link>
        <MessageSquareText />
        <div className='group relative'>
          <button className='mt-1 border border-gray-200 rounded-full w-[40px] h-[40px] overflow-hidden'>
            <img src='https://placehold.co/40' className='w-full h-full' alt='Avatar' />
          </button>

          <div className='absolute hidden group-focus-within:block bg-white rounded-md py-1.5 w-[200px] shadow border top-[50px] right-0 divide-y divide-dashed'>
            <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-gray-100 cursor-pointer'>
              <User size={20} />
              <span className='text-[15px]'>Xem hồ sơ</span>
            </button>
            <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-gray-100 cursor-pointer'>
              <Settings size={20} />
              <span className='text-[15px]'>Cài đặt</span>
            </button>
            <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-gray-100 cursor-pointer'>
              <Moon size={20} />
              <span className='text-[15px]'>Chế độ tối</span>
            </button>
            <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-gray-100 cursor-pointer'>
              <LogOut size={20} />
              <span className='text-[15px]'>Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
