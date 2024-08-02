import Header from "./Header";
import SideNavMain from "@/layouts/SideNavMain";

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <main className='flex mx-auto w-full lg:px-2.5 px-0 mt-[60px]'>
        <SideNavMain />
        <div className='w-full flex justify-center lg:ml-[240px] ml-[70px] shrink bg-red-500'>{children}</div>
      </main>
    </>
  );
}
