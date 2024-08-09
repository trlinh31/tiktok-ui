import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { useSelector, useDispatch } from "react-redux";
import { selectIsShowModalLogin } from "@/redux/features/authentication/authSelectors";
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
import MainButton from "@/components/MainButton";

interface IFormData {
  email: string;
  password: string;
}

export default function LoginModal() {
  const isShowModalLogin = useSelector(selectIsShowModalLogin);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPending, setPending] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: string) => value.match(REGEX.EMAIL);

  const isEmailInvalid = useMemo(() => {
    if (formData.email === "") return false;
    return validateEmail(formData.email) ? false : true;
  }, [formData.email]);

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const isFormInvalid = useMemo(() => {
    return formData.email === "" || formData.password === "";
  }, [formData]);

  const handleShowModalRegister = () => {
    dispatch(toggleModalLogin());
    dispatch(toggleModalRegister());
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPending(true);
    try {
      const response = await authService.login(formData);
      if (response.status === HttpStatusCode.Ok) {
        const { accessToken, refreshToken, user } = response.data.content;
        tokenUtil.setToken("accessToken", accessToken);
        tokenUtil.setToken("refreshToken", refreshToken);
        dispatch(setAuthenticated(true));
        dispatch(setProfileInfo(user));
        dispatch(toggleModalLogin());
        resetForm();
        toast.success("Đăng nhập thành công");
      }
    } catch (error) {
      toast.error("Đăng nhập thất bại");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <Modal isOpen={isShowModalLogin} onClose={() => dispatch(toggleModalLogin())} placement='top-center'>
        <ModalContent>
          <ModalHeader>
            <h1 className='text-2xl'>{t("heading.modal.login")}</h1>
          </ModalHeader>
          <form onSubmit={handleSubmit} method='post'>
            <ModalBody>
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
                value={formData.password}
                onChange={handleInputChange}
                errorMessage={t("error.validate.password.invalid")}
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
                {t("label.action.login")}
              </MainButton>
            </ModalFooter>
          </form>
          <div className='mt-3'>
            <Divider />
            <p className='text-center py-3 text-sm'>
              {t("text.modal.question.hasNoAccount")}{" "}
              <button className='text-primary' onClick={handleShowModalRegister}>
                {t("label.action.register")}
              </button>
            </p>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
