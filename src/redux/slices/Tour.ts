import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Tour {
  id: number;
  country: string;
  name: string;
  routes: string[];
  days: number;
  addOns: string[];
  groupSize: number;
  ageRange: number[];
  cost: number;
  operatedIn: string;
  paymentDetails: string;
}

interface TourState {
  tours: Tour[];
}

const initialState: TourState = {
  tours: [],
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    getToursByCountry: (state, action: PayloadAction<Tour[]>) => {
      state.tours = action.payload;
    },
  },
});

export const tourActions = tourSlice.actions;
export default tourSlice;
