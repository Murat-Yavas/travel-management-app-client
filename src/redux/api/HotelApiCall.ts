import { hotelActions } from "../slices/Hotel";

export const fetchAllHotels = async (dispatch: any) => {
  dispatch(hotelActions.toggleIsLoading(true));
  try {
    const response = await fetch("http://localhost:8080/hotels");
    if (!response.ok) throw new Error("Failed to fetch hotels");
    const result = await response.json();
    dispatch(hotelActions.getAllHotels(result));
    dispatch(hotelActions.toggleIsLoading(false));
    dispatch(hotelActions.toggleIsError(false));
  } catch (error) {
    dispatch(hotelActions.toggleIsLoading(false));
    dispatch(hotelActions.toggleIsError(true));
  }
};

export const fetchRegisteredHotels = async (dispatch: any, hotelId: number) => {
  dispatch(hotelActions.toggleIsLoading(true));
  try {
    const response = await fetch(
      `http://localhost:8080/hotels/id?id=${hotelId}`
    );
    if (!response.ok) throw new Error("Failed to fetch hotels");
    const result = await response.json();
    dispatch(hotelActions.getRegisteredHotels(result));
    dispatch(hotelActions.toggleIsLoading(false));
    dispatch(hotelActions.toggleIsError(false));
  } catch (error) {
    dispatch(hotelActions.toggleIsLoading(false));
    dispatch(hotelActions.toggleIsError(true));
  }
};
