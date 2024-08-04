import { useState } from "react";
import { ChevronLeft, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { languages } from "@/data/language";

export default function LanguagesNavSetting({ setOpenDropdownParent }: { setOpenDropdownParent: Function }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const handleChangeLanguage = (event: any) => {
    const language = event.currentTarget.getAttribute("data-language");
    changeLanguage(language);
    setOpen(false);
    localStorage.setItem("currentLanguage", language);
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
    setOpenDropdownParent(!isOpen);
  };

  return (
    <>
      <button
        className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'
        onClick={toggleMenu}>
        <Languages size={20} />
        <span className='text-[15px]'>{t("label.setting.language.choose")}</span>
      </button>

      <div
        className={`${
          isOpen ? "visible" : "invisible"
        } fixed bg-white dark:bg-dark rounded-md py-1.5 w-[200px] shadow border top-[56px] right-[20px]`}>
        <div className='flex items-center gap-x-2 w-full justify-start p-3'>
          <ChevronLeft size={16} className='cursor-pointer' onClick={toggleMenu} />
          <span className='text-[15px]'>{t("label.setting.language.choose")}</span>
        </div>
        {languages.map((language: any, index: number) => (
          <button
            key={index}
            className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'
            data-language={language.code}
            onClick={(e) => handleChangeLanguage(e)}>
            <span className='text-[15px]'>{t(language.name)}</span>
          </button>
        ))}
      </div>
    </>
  );
}
