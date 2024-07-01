import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  userHotels: { hotelId: number }[];
  userTours: { tourId: number }[];
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
    userHotels: [],
    userTours: [],
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
        userHotels: [],
        userTours: [],
      };
    },

    editUserInfo: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    deleteUserInfo: (state) => {
      state.user = {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        userHotels: [],
        userTours: [],
      };
    },

    registerHotelToUser: (
      state,
      action: PayloadAction<{ hotelId: number }>
    ) => {
      state.user.userHotels.push(action.payload);
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
