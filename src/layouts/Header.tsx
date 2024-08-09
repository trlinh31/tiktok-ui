import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CloudUpload, EllipsisVertical, MessageSquareText, Send } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import ProfileNav from "@/components/ProfileNav";
import SearchNavInput from "@/components/SearchNavInput";
import MainButton from "@/components/MainButton";
import { useThemeMode } from "@/contexts/ThemeContext";
import { selectIsAuthenticated } from "@/redux/features/authentication/authSelectors";
import { setAuthenticated, toggleModalLogin } from "@/redux/features/authentication/authSlice";
import tokenUtil from "@/utils/token.util";
import HeaderSetting from "@/components/HeaderSetting";

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { theme } = useThemeMode();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const token = tokenUtil.getToken("accessToken");
    if (token) {
      dispatch(setAuthenticated(true));
    }
  }, [dispatch]);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const renderAuthButtons = () => (
    <>
      <MainButton onClick={() => dispatch(toggleModalLogin())}>{t("label.action.login")}</MainButton>
      <button onClick={() => toggleMenu()}>
        <EllipsisVertical />
      </button>

      <HeaderSetting isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );

  const renderUserActions = () => (
    <div className='flex items-center gap-x-5'>
      <Link to={"/upload"}>
        <CloudUpload color={theme === "light" ? "#000" : "#fff"} />
      </Link>
      <Link to={"/messages"}>
        <Send color={theme === "light" ? "#000" : "#fff"} />
      </Link>
      <MessageSquareText color={theme === "light" ? "#000" : "#fff"} />
      <ProfileNav />
    </div>
  );

  return (
    <header className='fixed top-0 left-0 right-0 bg-white dark:bg-dark z-30 flex items-center w-full border-b dark:border-b-dark h-[60px]'>
      <div className='flex items-center justify-between gap-6 w-full px-5'>
        <Link to={"/"}>
          <img
            src={theme === "light" ? "/images/tiktok-logo.png" : "/images/tiktok-logo-white.png"}
            className='min-w-[110px] w-[110px] object-cover'
            alt='Tiktok'
          />
        </Link>
        <SearchNavInput />
        <div className='flex items-center gap-3'>{isAuthenticated ? renderUserActions() : renderAuthButtons()}</div>
      </div>
    </header>
  );
}
