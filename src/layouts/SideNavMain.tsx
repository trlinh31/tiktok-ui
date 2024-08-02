import MenuList from "@/layouts/includes/MenuList";
import MenuListFollow from "@/layouts/includes/MenuListFollow";

export default function SideNavMain() {
  return (
    <>
      <aside>
        <div>
          <div className='fixed z-20 bg-white h-full lg:border-r-0 border-r lg:w-[240px] w-[70px] overflow-auto'>
            <div className='w-full pt-[20px] pb-[50px]'>
              <MenuList />
              <div className='w-full px-5 mx-auto h-[0.5px] bg-gray-200'></div>
              <MenuListFollow />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
