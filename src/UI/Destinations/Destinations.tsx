import styles from "./Destinations.module.css";

import { NavLink } from "react-router-dom";

interface DestinationsProps {
  image: string;
  countries: string[];
  continentName: string;
}

const Destinations = ({
  image,
  countries,
  continentName,
}: DestinationsProps) => {
  return (
    <div className={`${styles.destination}`}>
      <div className={`${styles["destination-header"]}`}>
        <img
          className={`${styles["destination-header-image"]} h-48 w-full`}
          src={image}
        />
        <div className={`${styles["continent-name"]}`}>{continentName}</div>
        <NavLink
          to={`/tours/continent?continentName=${continentName}`}
          type="button"
          className={`${styles["destination-button"]} py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-white hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
        >
          All Adventures
        </NavLink>
      </div>
      <div
        className={`${styles["destination-countries"]} grid gap-4 grid-cols-3 grid-rows-3 mb-4`}
      >
        {countries.map((country, index) => (
          <NavLink
            key={index}
            to={`/tours/country?countryName=${country}`}
            className={`${styles["country-name"]}`}
          >
            {country}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
