import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchToursByContinent,
  fetchToursByCountry,
} from "../../redux/api/TourApiCall";
import styles from "./CountryTourDetails.module.css";
import "../../Variables.css";
import { filteredElements, findCity } from "../../helpers/General";
import { Tour } from "../../redux/slices/Tour";

interface CountryTourDetailsProps {
  isContinentPage?: boolean;
}

const CountryTourDetails = ({ isContinentPage }: CountryTourDetailsProps) => {
  const { tours, isError, isLoading } = useAppSelector((state) => state.tour);
  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [city, setCity] = useState("");
  const [day, setDay] = useState("");
  const [filteredArray, setFilteredArray] = useState<Tour[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const country = searchParams.get("countryName");
  const continent = searchParams.get("continentName");

  useEffect(() => {
    if (isContinentPage) fetchToursByContinent(dispatch, continent!);
    else fetchToursByCountry(dispatch, country!);
  }, []);

  useEffect(() => {
    setFilteredArray(tours);
  }, [tours]);

  const handleFilter = () => {
    if (minPrice !== "" || maxPrice !== "" || city !== "" || day !== "") {
      const newArray: Tour[] = [];
      tours.map((tour) => {
        if (
          (tour.cost <= parseInt(maxPrice) &&
            tour.cost >= parseInt(minPrice)) ||
          (day === ""
            ? false
            : true && parseInt(day) <= 13
            ? tour.days === parseInt(day)
            : tour.days >= 14) ||
          findCity(tour, city)
        ) {
          newArray.push(tour);
        }
      });
      setFilteredArray(newArray);
    } else setFilteredArray(tours);
  };

  const handleClearFilters = () => {
    setMinPrice("min");
    setMaxPrice("");
    setCity("");
    setDay("");
    setFilteredArray(tours);
  };

  if (isError) return <div>Something went wrong!</div>;
  else if (isLoading) return <div>Loading...</div>;
  else
    return (
      <div className={`${styles["tour-details"]} main-padding xl:flex`}>
        <div className={`${styles["filter-section"]} flex-auto `}>
          <section className="py-24 relative">
            <div className="w-full mx-auto px-4 md:px-8">
              <div>
                <div className="w-full max-md:max-w-md max-md:mx-auto">
                  <div className="box rounded-xl border border-gray-300 bg-white p-6 flex justify-between xl:flex-col ">
                    <div>
                      <h6 className="font-medium text-base leading-7 text-black">
                        Price
                      </h6>
                      <div className="flex items-center mb-5 gap-1">
                        <div className="relative w-full">
                          <select
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            id="FROM"
                            className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                          >
                            <option value="">Min</option>
                            <option value="0">0</option>
                            <option value="150">1000</option>
                            <option value="300">1500</option>
                            <option value="500">2000</option>
                            <option value="700">2500</option>
                            <option value="700">3000</option>
                            <option value="700">3500</option>
                          </select>
                          <svg
                            className={`${styles["input-icon"]} absolute top-1/2 -translate-y-1/2 right-4 z-50`}
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                              stroke="#111827"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="px-1 font-normal text-sm leading-6 text-gray-600">
                          to
                        </p>
                        <div className="relative w-full">
                          <select
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            id="FROM"
                            className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                          >
                            <option value="">Max</option>
                            <option value="149">999</option>
                            <option value="299">1499</option>
                            <option value="499">1999</option>
                            <option value="699">2499</option>
                            <option value="899">2999</option>
                            <option value="899">3499</option>
                            <option value="899">3999</option>
                          </select>
                          <svg
                            className={`${styles["input-icon"]} absolute top-1/2 -translate-y-1/2 right-4 z-50`}
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                              stroke="#111827"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cities"
                        className="block mb-2 text-sm font-medium text-gray-600 w-full"
                      >
                        City
                      </label>
                      <div className="relative w-full mb-8">
                        <select
                          id="FROM"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                        >
                          <option value="">Select City</option>

                          {filteredElements(tours).map((tour, i) => (
                            <option key={i} value={tour}>
                              {tour}
                            </option>
                          ))}
                        </select>
                        <svg
                          className={`${styles["input-icon"]} absolute top-1/2 -translate-y-1/2 right-4 z-50`}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                            stroke="#111827"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="duration"
                        className="block mb-2 text-sm font-medium text-gray-600 w-full"
                      >
                        Duration
                      </label>
                      <div className="relative w-full mb-8">
                        <select
                          id="FROM"
                          value={day}
                          onChange={(e) => setDay(e.target.value)}
                          className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                        >
                          <option value="">Select day</option>

                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14+</option>
                        </select>
                        <svg
                          className={`${styles["input-icon"]} absolute top-1/2 -translate-y-1/2 right-4 z-50`}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                            stroke="#111827"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={handleFilter}
                        className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-lime-300 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-lime-500 hover:shadow-indigo-200  "
                      >
                        Search
                      </button>
                      <span
                        onClick={handleClearFilters}
                        className={`${styles["clear-filter-button"]} hover:text-lime-500`}
                      >
                        Clear filters
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9"></div>
              </div>
            </div>
          </section>
        </div>
        <div className={`${styles["tour-cards"]}  flex-auto xl:w-9/12`}>
          {tours.length === 0 ? (
            <h1 className="text-center mt-8 text-2xl">Sorry! No result</h1>
          ) : (
            filteredArray.map((tour) => (
              <div
                key={tour.id}
                className={`${styles["tour-card-element"]} flex`}
              >
                <div
                  className={`${styles["tour-image-container"]} flex-auto w-4/12`}
                >
                  <img
                    className={`${styles["tour-image"]}`}
                    src={tour.tourImage}
                  />
                </div>

                <div
                  className={`${styles["tour-info"]} flex flex-auto flex-col w-8/12`}
                >
                  <div className="w-full">
                    <NavLink
                      to={`/tours/${tour.id}`}
                      className={`${styles["tour-name"]}`}
                    >
                      {tour.name}
                    </NavLink>
                  </div>
                  <div className="md:flex">
                    <div
                      className={`${styles["left-section"]} flex-auto w-8/12`}
                    >
                      <div className={`${styles["section-element"]}`}>
                        <div>
                          <span className={`${styles["element-title"]}`}>
                            Destiantions
                          </span>
                        </div>
                        <div>
                          <span>
                            {tour.routes[0]}, {tour.routes[1]}, +
                            {tour.routes.length - 2} more
                          </span>
                        </div>
                      </div>
                      <div className={`${styles["section-element"]}`}>
                        <div>
                          <span className={`${styles["element-title"]}`}>
                            Age Range
                          </span>
                        </div>
                        <div>
                          <span>
                            {tour.ageRange[0]} to {tour.ageRange[1]} years old
                          </span>
                        </div>
                      </div>
                      <div className={`${styles["section-element"]}`}>
                        <div>
                          <span className={`${styles["element-title"]}`}>
                            Operated In
                          </span>
                        </div>
                        <div>
                          <span>{tour.operatedIn}</span>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div
                      className={`${styles["right-section"]} flex-auto w-4/12`}
                    >
                      <div className={`${styles["section-element"]}`}>
                        <div>
                          <span className={`${styles["element-title"]}`}>
                            Duration
                          </span>
                        </div>
                        <div>
                          <span>{tour.days} days</span>
                        </div>
                      </div>
                      <div className={`${styles["section-element"]}`}>
                        <div>
                          <span className={`${styles["element-title"]}`}>
                            Price
                          </span>
                        </div>
                        <div>
                          <span>&#36; {tour.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
};

export default CountryTourDetails;
