import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
}

interface UserState {
  user: User;
  isLoginLoading: boolean;
  isLoginError: boolean;
}

const initialState: UserState = {
  user: {
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  },
  isLoginLoading: false,
  isLoginError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    exitFromProfile: (state) => {
      state.user = {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
      };
    },

    toggleIsLoginLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoginLoading = action.payload;
    },

    toggleIsLoginError: (state, action: PayloadAction<boolean>) => {
      state.isLoginError = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
