import { tourActions } from "../slices/Tour";

export const fetchToursByCountry = async (dispatch: any, country: string) => {
  try {
    const response = await fetch(
      `http://localhost:8080/tours/country?countryName=${country}`
    );
    if (!response.ok) throw new Error("Failed to fetch blogs");
    const result = await response.json();
    dispatch(tourActions.getToursByCountry(result));
  } catch (error) {
    console.log(error);
  }
};
