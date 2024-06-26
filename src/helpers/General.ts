import { Hotel } from "../redux/slices/Hotel";
import { Tour } from "../redux/slices/Tour";

export const filteredElements = (arr: any[]) => {
  let temp: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    temp = temp.concat(arr[i].routes);
  }

  return [...new Set(temp)];
};

export const findCity = (tour: Tour, city: string) => {
  if (city === "") return false;
  return tour.routes.includes(city);
};

export const uniqueValues = (arr: string[]) => {
  return Array.from(new Set(arr));
};

export const findCountryEqual = (hotel: Hotel, country: string) => {
  if (country === "") return false;
  return hotel.country.includes(country);
};

export const findCityEqual = (hotel: Hotel, city: string) => {
  if (city === "") return false;
  return hotel.city.includes(city);
};
