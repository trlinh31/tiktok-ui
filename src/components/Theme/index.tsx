import { Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "@/contexts/ThemeContext";

export default function Theme() {
  const { t } = useTranslation();
  const { toggleDarkMode } = useThemeMode();

  return (
    <>
      <button
        className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'
        onClick={toggleDarkMode}>
        <Moon size={20} />
        <span className='text-[15px]'>{t("label.setting.darkMode")}</span>
      </button>
    </>
  );
}
