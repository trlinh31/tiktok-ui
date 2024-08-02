import MenuItemFollow from "@/layouts/includes/MenuItemFollow";
import { Profile } from "@/data/profile";
import { useTranslation } from "react-i18next";

export default function MenuListFollow() {
  const { t } = useTranslation();
  return (
    <>
      <p className='lg:block hidden text-[14px] text-gray-400 font-normal px-[12px] py-3'>{t("sidebar.following.heading")}</p>
      <ul className='pb-[16px]'>
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <MenuItemFollow profile={Profile} />
            </li>
          ))}
      </ul>
    </>
  );
}
