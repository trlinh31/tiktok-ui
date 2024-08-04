import Header from "./Header";
import SideNavMain from "@/layouts/SideNavMain";

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <main className='flex mx-auto w-full lg:px-2.5 px-0 mt-[60px]'>
        <SideNavMain />
        <div className='w-full flex flex-col justify-center lg:ml-[240px] ml-[70px] shrink'>{children}</div>
      </main>
    </>
  );
}
