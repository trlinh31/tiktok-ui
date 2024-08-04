import MenuList from "@/layouts/includes/MenuList";
import MenuListFollow from "@/layouts/includes/MenuListFollow";
import { Divider } from "@nextui-org/divider";

export default function SideNavMain() {
  return (
    <>
      <aside>
        <div>
          <div className='fixed z-20 bg-white h-full lg:border-r-0 border-r lg:w-[240px] w-[70px] overflow-auto dark:bg-dark text-black dark:text-white'>
            <div className='w-full pt-[20px] pb-[50px]'>
              <MenuList />
              <Divider />
              <MenuListFollow />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
