import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Hotel {
  id: number;
  name: string;
  country: string;
  city: string;
  address: string;
  hotelImage: string;
  contact: string[];
  star: string;
  cost: number;
  amenities: string[];
}

interface HotelState {
  hotels: Hotel[];
  registeredHotels: Hotel[];
  isError: boolean;
  isLoading: boolean;
}

const initialState: HotelState = {
  hotels: [],
  registeredHotels: [],
  isLoading: false,
  isError: false,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    getAllHotels: (state, action: PayloadAction<Hotel[]>) => {
      state.hotels = action.payload;
    },

    getRegisteredHotels: (state, action: PayloadAction<Hotel>) => {
      state.registeredHotels.push(action.payload);
    },

    toggleIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    toggleIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const hotelActions = hotelSlice.actions;
export default hotelSlice;
