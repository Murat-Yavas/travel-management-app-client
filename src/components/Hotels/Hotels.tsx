import { useEffect, useState } from "react";
import { fetchAllHotels } from "../../redux/api/HotelApiCall";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Hotels.module.css";
import "../../Variables.css";
import HotelSlide from "../../UI/HotelSlide/HotelSlide";
import {
  findCityEqual,
  findCountryEqual,
  uniqueValues,
} from "../../helpers/General";
import { Hotel } from "../../redux/slices/Hotel";

const Hotels = () => {
  const dispatch = useAppDispatch();
  const { hotels } = useAppSelector((state) => state.hotel);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [filteredArray, setFilteredArray] = useState<Hotel[]>([]);

  const hotelsCountry = hotels.map((hotel) => hotel.country);
  const hotelsCity = hotels.map((hotel) => hotel.city);

  useEffect(() => {
    fetchAllHotels(dispatch);
  }, []);

  useEffect(() => {
    setFilteredArray(hotels);
  }, [hotels]);

  const handleFilter = () => {
    if (minPrice !== "" || maxPrice !== "" || city !== "" || country !== "") {
      const newArray: Hotel[] = [];
      hotels.map((hotel) => {
        if (
          (hotel.cost >= parseInt(minPrice) &&
            hotel.cost <= parseInt(maxPrice)) ||
          findCountryEqual(hotel, country) ||
          findCityEqual(hotel, city)
        ) {
          newArray.push(hotel);
        }
      });
      setFilteredArray(newArray);
    } else setFilteredArray(hotels);
  };

  const handleClearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setCity("");
    setCity("");
    setFilteredArray(hotels);
  };

  return (
    <div className={`${styles["hotels-page"]} main-padding`}>
      <div className="xl:flex">
        <div className={`${styles["filter-section"]} flex-auto `}>
          <section className="py-24 relative">
            <div className="w-full mx-auto px-4 md:px-8">
              <div>
                <div className="w-full max-md:max-w-md max-md:mx-auto">
                  <div className="box rounded-xl border border-gray-300 bg-white p-6 flex justify-between xl:flex-col ">
                    <div>
                      <h6 className="font-medium text-base leading-7 text-black mb-5">
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
                            <option value="150">150</option>
                            <option value="300">300</option>
                            <option value="500">500</option>
                            <option value="700">700</option>
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
                            <option value="149">149</option>
                            <option value="299">299</option>
                            <option value="499">499</option>
                            <option value="699">699</option>
                            <option value="899">899</option>
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
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Country
                      </label>
                      <div className="relative w-full mb-8">
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          id="FROM"
                          className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                        >
                          <option value="">Select Country</option>

                          {uniqueValues(hotelsCountry).map((country) => (
                            <option key={country} value={country}>
                              {country}
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
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-600"
                      >
                        City
                      </label>
                      <div className="relative w-full mb-8">
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          id="FROM"
                          className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                        >
                          <option value="">Select City</option>
                          {uniqueValues(hotelsCity).map((city) => (
                            <option key={city} value={city}>
                              {city}
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
        <div className={`${styles["hotel-details"]} flex-auto w-9/12`}>
          {filteredArray.map((hotel) => (
            <HotelSlide key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
