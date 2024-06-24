import { tourActions } from "../slices/Tour";

export const fetchToursByCountry = async (dispatch: any, country: string) => {
  dispatch(tourActions.toggleIsLoading(true));
  try {
    const response = await fetch(
      `http://localhost:8080/tours/country?countryName=${country}`
    );
    if (!response.ok) throw new Error("Failed to fetch tours");
    const result = await response.json();
    dispatch(tourActions.getToursByCountry(result));
    dispatch(tourActions.toggleIsLoading(false));
    dispatch(tourActions.toggleIsError(false));
  } catch (error) {
    dispatch(tourActions.toggleIsLoading(false));
    dispatch(tourActions.toggleIsError(true));
  }
};

export const fetchToursByContinent = async (
  dispatch: any,
  continent: string
) => {
  dispatch(tourActions.toggleIsLoading(true));
  try {
    const response = await fetch(
      `http://localhost:8080/tours/continent?continentName=${continent}`
    );
    if (!response.ok) throw new Error("Failed to fetch tours");
    const result = await response.json();
    dispatch(tourActions.getToursByContinent(result));
    dispatch(tourActions.toggleIsLoading(false));
    dispatch(tourActions.toggleIsError(false));
  } catch (error) {
    dispatch(tourActions.toggleIsLoading(false));
    dispatch(tourActions.toggleIsError(true));
  }
};

export const fetchOneTour = async (dispatch: any, tourId: string) => {
  dispatch(tourActions.toggleIsLoading(true));
  try {
    const response = await fetch(`http://localhost:8080/tours/${tourId}`);
    if (!response.ok) throw new Error("Failed to fetch tour");
    const result = await response.json();
    dispatch(tourActions.getOneTour(result));
    dispatch(tourActions.toggleIsLoading(false));
    dispatch(tourActions.toggleIsError(false));
  } catch (error) {
    dispatch(tourActions.toggleIsLoading(false));
    dispatch(tourActions.toggleIsError(true));
  }
};
