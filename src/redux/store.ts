import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "./slices/Tour";

export const store = configureStore({
  reducer: { tour: tourSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
