import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Tour {
  id: number;
  country: string;
  name: string;
  routes: string[];
  tourStartDate: string[];
  days: number;
  addOns: string[];
  groupSize: number;
  tourImage: string;
  ageRange: number[];
  cost: number;
  operatedIn: string;
  paymentDetails: string;
}

interface TourState {
  tours: Tour[];
  tour: Tour;
  isError: boolean;
  isLoading: boolean;
}

const initialState: TourState = {
  tours: [],
  tour: {
    id: 0,
    country: "",
    name: "",
    routes: [],
    tourStartDate: [],
    days: 0,
    addOns: [],
    groupSize: 0,
    tourImage: "",
    ageRange: [],
    cost: 0,
    operatedIn: "",
    paymentDetails: "",
  },
  isError: false,
  isLoading: false,
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    getToursByCountry: (state, action: PayloadAction<Tour[]>) => {
      state.tours = action.payload;
    },

    getToursByContinent: (state, action: PayloadAction<Tour[]>) => {
      state.tours = action.payload;
    },

    getOneTour: (state, action: PayloadAction<Tour>) => {
      state.tour = action.payload;
    },

    toggleIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    toggleIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const tourActions = tourSlice.actions;
export default tourSlice;
