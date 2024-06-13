import { NavLink } from "react-router-dom";
import styles from "./CountryCard.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { fetchToursByCountry } from "../../redux/api/TourApiCall";

interface CountryCardProps {
  img: string;
  country: string;
}

const CountryCard = ({ img, country }: CountryCardProps) => {
  const dispatch = useAppDispatch();

  const getTours = (country: string) => {
    fetchToursByCountry(dispatch, country);
  };

  return (
    <>
      <NavLink
        to="/"
        onClick={() => getTours(country)}
        className={`${styles["image-container"]} max-w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
      >
        <img
          className={`${styles["card-image"]} rounded-lg`}
          src={img}
          alt=""
        />
        <div className={`${styles["card-text"]} font-bold`}>{country}</div>
      </NavLink>
    </>
  );
};

export default CountryCard;
