import ProfileNav from "@/components/ProfileNav";
import SearchNavInput from "@/components/SearchNavInput";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-white z-30 flex items-center w-full border-b h-[60px]'>
        <div className='flex items-center justify-between gap-6 w-full px-5'>
          <Link to={"/"}>
            <img src='/images/tiktok-logo.png' className='min-w-[115px] w-[115px]' alt='Tiktok' />
          </Link>

          <SearchNavInput />

          <div className='flex items-center gap-3'>
            {!true ? (
              <>
                <Button color='danger' radius='sm'>
                  Đăng nhập
                </Button>
              </>
            ) : (
              <ProfileNav />
            )}
          </div>
        </div>
      </header>
    </>
  );
}
