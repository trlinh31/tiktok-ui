import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isShowModalLogin: boolean;
  isShowModalRegister: boolean;
  isAuthenticated: boolean;
  profile: User | null;
}

const initialState: AuthState = {
  isShowModalLogin: false,
  isShowModalRegister: false,
  isAuthenticated: false,
  profile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleModalLogin: (state) => {
      state.isShowModalLogin = !state.isShowModalLogin;
    },
    toggleModalRegister: (state) => {
      state.isShowModalRegister = !state.isShowModalRegister;
    },
    setProfileInfo: (state, action) => {
      state.profile = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { toggleModalLogin, toggleModalRegister, setProfileInfo, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
