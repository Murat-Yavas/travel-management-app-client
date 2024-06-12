import styles from "./CountryCard.module.css";

interface CountryCardProps {
  img: string;
  country: string;
}

const CountryCard = ({ img, country }: CountryCardProps) => {
  return (
    <>
      <div
        className={`${styles["image-container"]} max-w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
      >
        <img
          className={`${styles["card-image"]} rounded-lg`}
          src={img}
          alt=""
        />
        <div className={`${styles["card-text"]}`}>{country}</div>
      </div>
    </>
  );
};

export default CountryCard;
