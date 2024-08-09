import { AuthState } from "@/redux/features/authentication/authSlice";

interface IState {
  auth: AuthState;
}

export const selectIsShowModalLogin = (state: IState) => state.auth.isShowModalLogin;
export const selectIsShowModalRegister = (state: IState) => state.auth.isShowModalRegister;
export const selectIsAuthenticated = (state: IState) => state.auth.isAuthenticated;
export const selectProfile = (state: IState) => state.auth.profile;
