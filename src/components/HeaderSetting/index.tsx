import { LogOut, Settings, User } from "lucide-react";
import Theme from "@/components/Theme";
import LanguagesNavSetting from "@/components/LanguageNavSetting";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setProfileInfo } from "@/redux/features/authentication/authSlice";
import tokenUtil from "@/utils/token.util";
import { selectIsAuthenticated } from "@/redux/features/authentication/authSelectors";

export default function HeaderSetting({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: Function }) {
  const { t } = useTranslation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setProfileInfo(null));
    dispatch(setAuthenticated(false));
    tokenUtil.logout();
  };

  return (
    <>
      <div
        className={`${
          isOpen ? "visible" : "invisible"
        } absolute bg-white rounded-md py-1.5 w-[200px] shadow border top-[50px] right-0 dark:bg-dark dark:divide-gray-700 dark:border-gray-900`}>
        {isAuthenticated && (
          <>
            <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'>
              <User size={20} />
              <span className='text-[15px]'>{t("label.setting.viewProfile")}</span>
            </button>
            <button className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'>
              <Settings size={20} />
              <span className='text-[15px]'>{t("label.setting.settings")}</span>
            </button>
          </>
        )}
        <Theme />
        <LanguagesNavSetting setOpenDropdownParent={toggleMenu} />
        {isAuthenticated && (
          <button
            className='flex items-center gap-x-2 w-full justify-start p-3 hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer'
            onClick={handleLogout}>
            <LogOut size={20} />
            <span className='text-[15px]'>{t("label.setting.logout")}</span>
          </button>
        )}
      </div>
    </>
  );
}
