import { tourActions } from "../slices/Tour";

export const fetchToursByCountry = async (dispatch: any, country: string) => {
  try {
    const response = await fetch(
      `http://localhost:8080/tours/country?countryName=${country}`
    );
    if (!response.ok) throw new Error("Failed to fetch tours");
    const result = await response.json();
    dispatch(tourActions.getToursByCountry(result));
  } catch (error) {
    console.log(error);
  }
};

export const fetchToursByContinent = async (
  dispatch: any,
  continent: string
) => {
  try {
    const response = await fetch(
      `http://localhost:8080/tours/continent?continentName=${continent}`
    );
    if (!response.ok) throw new Error("Failed to fetch tours");
    const result = await response.json();
    dispatch(tourActions.getToursByContinent(result));
  } catch (error) {
    console.log(error);
  }
};

export const fetchOneTour = async (dispatch: any, tourId: string) => {
  try {
    const response = await fetch(`http://localhost:8080/tours/${tourId}`);
    if (!response.ok) throw new Error("Failed to fetch tour");
    const result = await response.json();
    dispatch(tourActions.getOneTour(result));
  } catch (error) {
    console.log(error);
  }
};
