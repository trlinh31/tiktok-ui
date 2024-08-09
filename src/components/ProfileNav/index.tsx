import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, selectProfile } from "@/redux/features/authentication/authSelectors";
import profileService from "@/services/profile.service";
import { HttpStatusCode } from "axios";
import { setProfileInfo } from "@/redux/features/authentication/authSlice";
import { avatarFakeURL } from "@/constants";
import Avatar from "@/components/Avatar";
import HeaderSetting from "@/components/HeaderSetting";
import tokenUtil from "@/utils/token.util";

export default function ProfileNav() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      profileService
        .getProfile()
        .then((res) => {
          if (res.status === 200) {
            const { status, content } = res.data;
            if (status === HttpStatusCode.Ok) {
              dispatch(setProfileInfo(content));
            }
          }
        })
        .catch((error) => {
          console.log("Can not get profile: ", error);
          tokenUtil.logout();
        });
    }
  }, [isAuthenticated, dispatch]);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className='relative'>
        {profile ? (
          <div onClick={toggleMenu} className='cursor-pointer'>
            <Avatar fullName={profile.fullName} />
          </div>
        ) : (
          <button className='mt-1 border border-gray-200 rounded-full w-[40px] h-[40px] overflow-hidden' onClick={toggleMenu}>
            <img src={avatarFakeURL} className='w-full h-full' alt='Avatar' />
          </button>
        )}
      </div>
      <HeaderSetting isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
