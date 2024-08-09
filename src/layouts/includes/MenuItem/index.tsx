import { useTranslation } from "react-i18next";
import { IconType } from "@/types";
import { useThemeMode } from "@/contexts/ThemeContext";

export default function MenuItem({ title, icon, isCurrentPage }: { title: string; icon: IconType; isCurrentPage: boolean }) {
  const { t } = useTranslation();
  const { theme } = useThemeMode();
  const Icon = icon;

  return (
    <>
      <div className='flex items-center dark:hover:bg-hoverDark hover:bg-hoverLight p-[12px]'>
        <Icon strokeWidth={2.5} size={26} color={isCurrentPage ? "#fe2c55" : `${theme === "light" ? "#000" : "#fff"}`} />
        <p
          className={`lg:block hidden pl-[12px] mt-0.5 font-bold text-[17px] ${
            isCurrentPage ? "text-primary dark:text-primary" : "text-black dark:text-white "
          }`}>
          {t(title)}
        </p>
      </div>
    </>
  );
}
