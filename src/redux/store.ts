import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "./slices/Tour";
import hotelSlice from "./slices/Hotel";

export const store = configureStore({
  reducer: { tour: tourSlice.reducer, hotel: hotelSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
