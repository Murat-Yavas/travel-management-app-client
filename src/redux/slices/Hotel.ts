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
}

const initialState: HotelState = {
  hotels: [],
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    getAllHotels: (state, action: PayloadAction<Hotel[]>) => {
      state.hotels = action.payload;
    },
  },
});

export const hotelActions = hotelSlice.actions;
export default hotelSlice;
