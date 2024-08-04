import Header from "./Header";
import SideNavMain from "@/layouts/SideNavMain";

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <main className='flex mx-auto w-full mt-[60px] dark:bg-black text-black dark:text-white'>
        <SideNavMain />
        <div className='w-full flex flex-col justify-center lg:ml-[240px] ml-[70px] shrink'>{children}</div>
      </main>
    </>
  );
}
