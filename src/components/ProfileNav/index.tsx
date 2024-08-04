import { LogOut, Settings, User } from "lucide-react";
import Theme from "@/components/Theme";
import LanguagesNavSetting from "@/components/LanguageNavSetting";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProfileNav() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className='relative'>
        <button className='mt-1 border border-gray-200 rounded-full w-[40px] h-[40px] overflow-hidden' onClick={toggleMenu}>
          <img src='https://placehold.co/40' className='w-full h-full' alt='Avatar' />
        </button>

        <div
          className={`${
            isOpen ? "visible" : "invisible"
          } absolute bg-white rounded-md py-1.5 w-[200px] shadow border top-[50px] right-0 dark:bg-dark dark:divide-gray-700 dark:border-gray-900`}>
          <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'>
            <User size={20} />
            <span className='text-[15px]'>{t("label.setting.viewProfile")}</span>
          </button>
          <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'>
            <Settings size={20} />
            <span className='text-[15px]'>{t("label.setting.settings")}</span>
          </button>
          <Theme />
          <LanguagesNavSetting setOpenDropdownParent={toggleMenu} />
          <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'>
            <LogOut size={20} />
            <span className='text-[15px]'>{t("label.setting.logout")}</span>
          </button>
        </div>
      </div>
    </>
  );
}
