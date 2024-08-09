import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { useSelector, useDispatch } from "react-redux";
import { selectIsShowModalRegister } from "@/redux/features/authentication/authSelectors";
import { setAuthenticated, setProfileInfo, toggleModalLogin, toggleModalRegister } from "@/redux/features/authentication/authSlice";
import { useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Divider } from "@nextui-org/divider";
import { REGEX } from "@/constants";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import authService from "@/services/auth.service";
import { HttpStatusCode } from "axios";
import tokenUtil from "@/utils/token.util";
import MainButton from '@/components/MainButton';

interface IFormData {
  fullName: string;
  nickname: string;
  email: string;
  password: string;
}

export default function RegisterModal() {
  const isShowModalRegister = useSelector(selectIsShowModalRegister);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPending, setPending] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    nickname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: string) => value.match(REGEX.EMAIL);
  const validatePassword = (value: string) => value.match(REGEX.PASSWORD);
  const validateNickname = (value: string) => value.match(REGEX.NICKNAME);

  const isEmailInvalid = useMemo(() => {
    if (formData.email === "") return false;
    return validateEmail(formData.email) ? false : true;
  }, [formData.email]);

  const isNicknameInvalid = useMemo(() => {
    if (formData.nickname === "") return false;
    return validateNickname(formData.nickname) ? false : true;
  }, [formData.nickname]);

  const isPasswordInvalid = useMemo(() => {
    if (formData.password === "") return false;
    return validatePassword(formData.password) ? false : true;
  }, [formData.password]);

  const resetForm = () => {
    setFormData({
      fullName: "",
      nickname: "",
      email: "",
      password: "",
    });
  };

  const handleShowModalLogin = () => {
    dispatch(toggleModalRegister());
    dispatch(toggleModalLogin());
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPending(true);
    try {
      const response = await authService.register(formData);
      if (response.status === HttpStatusCode.Ok) {
        const { accessToken, refreshToken, user } = response.data.content;
        tokenUtil.setToken("accessToken", accessToken);
        tokenUtil.setToken("refreshToken", refreshToken);
        dispatch(setAuthenticated(true));
        dispatch(setProfileInfo(user));
        dispatch(toggleModalRegister());
        resetForm();
        toast.success("Đăng ký thành công");
      }
    } catch (error) {
      console.log(error);
      toast.error("Đăng ký thất bại");
    } finally {
      setPending(false);
    }
  };

  const isFormInvalid = useMemo(() => {
    return formData.fullName === "" || formData.nickname === "" || formData.email === "" || formData.password === "";
  }, [formData]);

  return (
    <>
      <Modal isOpen={isShowModalRegister} onClose={() => dispatch(toggleModalRegister())} placement='top-center'>
        <ModalContent>
          <ModalHeader>
            <h1 className='text-2xl'>{t("heading.modal.register")}</h1>
          </ModalHeader>
          <form onSubmit={handleSubmit} method='post' autoComplete='off'>
            <ModalBody>
              <Input
                isRequired
                type='text'
                name='fullName'
                label={t("input.placeholder.fullName")}
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <Input
                isRequired
                type='text'
                name='nickname'
                label={t("input.placeholder.nickname")}
                isInvalid={isNicknameInvalid}
                value={formData.nickname}
                onChange={handleInputChange}
                errorMessage={t("error.validate.nickname.invalid")}
                description={t("input.description.nickname")}
                color={isNicknameInvalid ? "danger" : "default"}
              />
              <Input
                isRequired
                type='email'
                name='email'
                label='Email'
                isInvalid={isEmailInvalid}
                value={formData.email}
                onChange={handleInputChange}
                errorMessage={t("error.validate.email.invalid")}
                color={isEmailInvalid ? "danger" : "default"}
              />
              <Input
                isRequired
                type={isVisible ? "text" : "password"}
                name='password'
                label={t("input.placeholder.password")}
                isInvalid={isPasswordInvalid}
                value={formData.password}
                onChange={handleInputChange}
                errorMessage={t("error.validate.password.invalid")}
                description={t("input.description.password")}
                endContent={
                  <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
                    {isVisible ? (
                      <Eye className='text-2xl text-default-400 pointer-events-none' />
                    ) : (
                      <EyeOff className='text-2xl text-default-400 pointer-events-none' />
                    )}
                  </button>
                }
              />
            </ModalBody>
            <ModalFooter>
              <MainButton type='submit' block isLoading={isPending} isDisabled={isFormInvalid}>
                {t("label.action.register")}
              </MainButton>
            </ModalFooter>
          </form>
          <div className='mt-3'>
            <Divider />
            <p className='text-center py-3 text-sm'>
              {t("text.modal.question.hasAccount")}{" "}
              <button className='text-primary' onClick={handleShowModalLogin}>
                {t("label.action.login")}
              </button>
            </p>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
