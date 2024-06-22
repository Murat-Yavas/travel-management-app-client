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
