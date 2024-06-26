import { hotelActions } from "../slices/Hotel";

export const fetchAllHotels = async (dispatch: any) => {
  try {
    const response = await fetch("http://localhost:8080/hotels");
    if (!response.ok) throw new Error("Failed to fetch hotels");
    const result = await response.json();
    dispatch(hotelActions.getAllHotels(result));
  } catch (error) {
    console.log(error);
  }
};
