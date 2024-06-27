import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userActions = userSlice.actions;
export default userSlice;
