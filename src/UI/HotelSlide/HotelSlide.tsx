import { useState } from "react";
import styles from "./HotelSlide.module.css";
import { MdOutlineFavorite } from "react-icons/md";
import { Hotel } from "../../redux/slices/Hotel";
import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { registerHotel } from "../../redux/api/UserApiCall";

type HotelProps = {
  hotel: Hotel;
};

const HotelSlide = ({ hotel }: HotelProps) => {
  const [isShowOtherDetails, setIsShowOtherDetails] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleRegister = (hotelId: number) => {
    registerHotel(dispatch, user.id, hotelId);
  };

  return (
    <div key={hotel.id} className={`${styles["hotel-card"]} mb-4 `}>
      <div className="flex mb-4">
        <div className={`${styles["hotel-image-container"]} flex-auto w-4/12`}>
          <img className={`${styles["hotel-image"]} `} src={hotel.hotelImage} />
        </div>

        <div className="flex-auto w-8/12">
          <div
            onClick={() => setIsShowOtherDetails(true)}
            className={`${styles["property-element"]} ${styles["hotel-name"]} text-2xl font-bold`}
          >
            {hotel.name}
          </div>
          <div className="md:flex">
            <div
              className={`${styles["hotel-properties-mid-section"]} flex-auto w-8/12`}
            >
              <div className={`${styles["property-element"]}`}>
                <Rating
                  className="mr-2"
                  fullSymbol={<FaRegStar />}
                  emptySymbol={<FaRegStar />}
                  stop={parseInt(hotel.star)}
                  readonly={true}
                />
                Hotel
              </div>
              <div className={`${styles["property-element"]}`}>
                {hotel.address}
              </div>
              <div className={`${styles["property-element"]}`}>
                {hotel.city}
              </div>
            </div>
            <div
              className={`${styles["hotel-properties-right-section"]} flex-auto w-4/12`}
            >
              <div
                className={`${styles["property-element"]} ${styles["favorite-button"]} text-2xl text-lime-300 `}
                title="Add to favorites"
              >
                <MdOutlineFavorite />
              </div>
              <div className={`${styles["property-element"]}`}>
                {hotel.country}
              </div>
              <div className={`${styles["property-element"]}`}>
                &#36;{hotel.cost} - per day
              </div>
            </div>
          </div>
        </div>
      </div>

      {isShowOtherDetails && (
        <div className={`${styles["hotel-info-slide"]}`}>
          <div className={`${styles["header-slide"]} my-2 text-right`}>
            <button
              onClick={() => setIsShowOtherDetails(false)}
              className={`${styles["close-button-header"]} text-xl text-black hover:text-lime-500`}
            >
              X
            </button>
          </div>
          <div className={`${styles["amenities-section"]}`}>
            <div className="font-bold text-xl my-2">Amenities</div>
            <div className="grid gap-4 grid-cols-3">
              {hotel.amenities.map((amenity, i) => (
                <span key={i}>{amenity}</span>
              ))}
            </div>
          </div>
          <div className={`${styles["contact-section"]}`}>
            <div className="font-bold text-xl  mt-4">Contact</div>
            <div>
              {hotel.contact.map((con) => (
                <div key={con} className="my-2">
                  {con}
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles["footer-slide"]} flex justify-end`}>
            <button
              onClick={() => handleRegister(hotel.id)}
              className={`${styles["close-button-footer"]}  bg-lime-300 hover:bg-lime-500`}
            >
              Select Your Room
            </button>

            <button
              onClick={() => setIsShowOtherDetails(false)}
              className={`${styles["close-button-footer"]} ml-2 bg-lime-300 hover:bg-lime-500`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelSlide;
