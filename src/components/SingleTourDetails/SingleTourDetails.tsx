import { useEffect, useRef } from "react";
import styles from "./SingleTourDetails.module.css";
import { fetchOneTour } from "../../redux/api/TourApiCall";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import "../../Variables.css";
import { TiTick } from "react-icons/ti";
import { GiTwoCoins } from "react-icons/gi";
import { TbArrowsSplit2 } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import moment from "moment";

const SingleTourDetails = () => {
  const dispatch = useAppDispatch();
  const { tour, isError, isLoading } = useAppSelector((state) => state.tour);
  const tourId = useParams();
  const dateSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchOneTour(dispatch, tourId.id!);
  }, []);

  const formatDate = (tourDate: string) => {
    let splittedDate = tourDate.split("-");

    let lastDate = moment(
      `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`
    )
      .add(tour.days - 1, "days")
      .calendar();
    return lastDate;
  };

  const handleCheckAvailability = () => {
    dateSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isError) return <div>Something went wrong!</div>;
  else if (isLoading) return <div>Loading...</div>;
  else
    return (
      <div className="p-12 flex flex-col lg:flex-row">
        <div
          className={`${styles["tour-info"]} flex-auto w-9/12 lg:order-1 order-2`}
        >
          <div className={`${styles["tour-header-info"]}`}>
            <div className={`${styles["tour-name"]}`}>{tour.name}</div>
            <div className={`${styles["info-text"]} flex`}>
              <div className="mr-12 font-bold">{tour.days} days</div>
              <div>
                From <span className="font-bold">{tour.routes[0]}</span> to{" "}
                <span className="font-bold">
                  {tour.routes[tour.routes.length - 1]}
                </span>
              </div>
            </div>
          </div>
          <div className={`${styles["tour-image-container"]}`}>
            <img src={tour.tourImage} className={`${styles["tour-image"]}`} />
          </div>
          <div className={`${styles["tour-footer-info"]}`}>
            <div className={`${styles["tour-property"]}`}>
              <span className="font-bold">Max Group Size:</span>
              <span>{tour.groupSize}</span>
            </div>
            <div className={`${styles["tour-property"]}`}>
              <span className="font-bold">Age Range:</span>
              <span>
                {tour.ageRange[0]} to {tour.ageRange[1]}
              </span>
            </div>
            <div className={`${styles["tour-property"]}`}>
              <span className="font-bold">Operated In:</span>
              <span>{tour.operatedIn}</span>
            </div>
            <div className={`${styles["tour-property"]}`}>
              <span className="font-bold">Tour Id:</span>
              <span>{tour.id}</span>
            </div>
          </div>
          <div className={`${styles["tour-routes"]}`}>
            <div className="font-bold text-2xl">Places You'll See</div>
            <div>
              {tour.routes.map((route) => (
                <div key={route} className={`${styles["routes-list-element"]}`}>
                  <TiTick className="text-xl" /> {route}
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles["tour-addons"]}`}>
            <div className="font-bold text-xl">What's Included</div>
            <div>
              {tour.addOns.map((addOn) => (
                <div key={addOn} className={`${styles["addons-list-element"]}`}>
                  <TiTick className="text-xl" /> {addOn}
                </div>
              ))}
            </div>
          </div>
          <div
            ref={dateSectionRef}
            className={`${styles["tour-availability"]} mt-8`}
          >
            <div className={`${styles["section-title"]}`}>
              Dates & Availability
            </div>
            <div className={`${styles["tour-properties"]} my-4`}>
              <div className="text-xs">{tour.days} DAYS</div>
              <div className="text-xl font-bold">{tour.name}</div>
              <div>
                From {tour.routes[0]} to {tour.routes[tour.routes.length - 1]}
              </div>
            </div>
            {tour.tourStartDate.map((startDate, index) => (
              <div key={index} className={`${styles["tour-dates"]} mb-4`}>
                <div className="lg:flex justify-between items-center">
                  <div className=" text-xl font-bold mb-2">{startDate}</div>
                  <div className=" text-xl font-bold mb-2">
                    <FaRegArrowAltCircleRight />
                  </div>
                  <div className=" text-xl font-bold mb-2">
                    {formatDate(startDate)}
                  </div>
                  <div className=" text-xl font-bold mb-2">
                    &#36;{tour.cost}
                  </div>
                  <div>
                    <button
                      className={`${styles["confirm-button"]} mb-2 bg-lime-300 hover:bg-lime-500`}
                    >
                      Confirm Dates
                    </button>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <TbWorldSearch className="mr-2" />
                  <div>English</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-auto w-3/12 lg:order-2 order-1">
          <div
            className={`${styles["price-block"]} ${styles["info-card"]} p-4 `}
          >
            <div className={`${styles["block-element"]}`}>From</div>
            <div
              className={`${styles["cost"]} ${styles["block-element"]} mb-4`}
            >
              &#36; {tour.cost}
            </div>
            <div className="lg:flex items-center justify-between">
              <button
                onClick={handleCheckAvailability}
                className={`${styles["check-button"]} ${styles["block-element"]} text-xl bg-lime-300 hover:bg-lime-500`}
              >
                Check Availability
              </button>
              <div
                className={`${styles["favorite-button"]} ${styles["block-element"]} text-lime-300`}
                title="Add to favorites"
              >
                <MdOutlineFavorite />
              </div>
            </div>
            <div className={`${styles["block-element"]}`}>
              <span className="font-bold mr-2">Mode of payment:</span>
              <span>{tour.paymentDetails}</span>
            </div>

            <div
              className={`${styles["block-element"]} flex items-center my-4`}
            >
              <div className="mr-2 text-xl">
                <GiTwoCoins />
              </div>
              <div>
                <span className="font-bold">Pay over time</span> with smaller,
                interest-free instalments.
              </div>
            </div>
            <div
              className={`${styles["block-element"]} flex items-center mb-4`}
            >
              <div className="mr-2 text-xl">
                <TbArrowsSplit2 />
              </div>
              <div className={`${styles["block-element"]}`}>
                <span className="font-bold">Book once</span> and share the cost
                with split payments.
              </div>
            </div>
          </div>
          <div
            className={`${styles["planning-block"]} ${styles["info-card"]} p-4`}
          >
            <div>
              <div>Plan your adventure:</div>
              <div className="text-lime-300 text-xl">
                <div className="flex items-center hover:text-lime-500 cursor-pointer my-2">
                  <div className="mr-2">
                    <FaQuestion />
                  </div>
                  <div className="font-bold">Ask a Question</div>
                </div>
                <div className="flex items-center hover:text-lime-500 cursor-pointer">
                  <div className="mr-2">
                    <FaAssistiveListeningSystems />
                  </div>
                  <div className="font-bold">Live Assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleTourDetails;
