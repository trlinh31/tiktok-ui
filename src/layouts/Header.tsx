import ProfileNav from "@/components/ProfileNav";
import SearchNavInput from "@/components/SearchNavInput";
import { Button } from "@nextui-org/button";
import { CloudUpload, EllipsisVertical, MessageSquareText, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useThemeMode } from "@/contexts/ThemeContext";

export default function Header() {
  const { theme } = useThemeMode();

  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-white dark:bg-dark z-30 flex items-center w-full border-b dark:border-b-dark h-[60px]'>
        <div className='flex items-center justify-between gap-6 w-full px-5'>
          <Link to={"/"}>
            <img
              src={theme == "light" ? "/images/tiktok-logo.png" : "/images/tiktok-logo-white.png"}
              className='min-w-[110px] w-[110px] object-cover'
              alt='Tiktok'
            />
          </Link>

          <SearchNavInput />

          <div className='flex items-center gap-3'>
            {!true ? (
              <>
                <Button color='danger' radius='sm'>
                  Đăng nhập
                </Button>
                <button>
                  <EllipsisVertical />
                </button>
              </>
            ) : (
              <div className='flex items-center gap-x-5'>
                <Link to={"/upload"}>
                  <CloudUpload color={`${theme === "light" ? "#000" : "#fff"}`} />
                </Link>
                <Link to={"/messages"}>
                  <Send color={`${theme === "light" ? "#000" : "#fff"}`} />
                </Link>
                <MessageSquareText color={`${theme === "light" ? "#000" : "#fff"}`} />
                <ProfileNav />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
