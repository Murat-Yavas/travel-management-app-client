import CountryCard from "../../UI/CountryCard/CountryCard";
import img1 from "../../assets/turkiye.jfif";
import img2 from "../../assets/germany.jpg";
import img3 from "../../assets/italy.jpeg";
import img4 from "../../assets/peru.jpg";
import img5 from "../../assets/russia.jpg";
import img6 from "../../assets/greece.jfif";
import img7 from "../../assets/spain.jpg";
import img8 from "../../assets/morocco.jpeg";
import img9 from "../../assets/japan.jpg";
import img10 from "../../assets/mexico.jfif";
import styles from "./Home.module.css";
import Destinations from "../../UI/Destinations/Destinations";
import "../../Variables.css";
import europe from "../../assets/europe.jpg";
import africa from "../../assets/africa.jpg";
import asia from "../../assets/asia.jpg";
import latinAmerica from "../../assets/latin-america.jpg";
import northAmerica from "../../assets/north-america.jpg";
import australia from "../../assets/australia.jpg";
import polar from "../../assets/polar.jpg";
import { europeCountries } from "../../helpers/Countries/Europe";
import { africaCountries } from "../../helpers/Countries/Africa";
import { asiaCountries } from "../../helpers/Countries/Asia";
import { northAmericaCountries } from "../../helpers/Countries/North-America";
import { latinAmericaCountries } from "../../helpers/Countries/Latin-America";
import { polarCountries } from "../../helpers/Countries/Polar";
import { australiaCountries } from "../../helpers/Countries/Australia";
import europe2 from "../../assets/europe2.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../../redux/api/UserApiCall";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (input === "") navigate("/");
    else {
      navigate(`/tours/country?countryName=${input}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    loadUser(dispatch);
  }, []);

  return (
    <>
      <div className="container mx-auto bg-lime-50 rounded-lg  mt-8">
        <form className="main-padding" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              onChange={(e) => setInput(e.target.value)}
              className="text-base text-gray-400 flex-grow outline-none px-2"
              type="text"
              placeholder="Search countries..."
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button
                onClick={handleSearch}
                className="bg-lime-300 text-white text-base rounded-lg px-4 py-2 font-thin "
              >
                Get Tours
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className={`${styles["country-deals"]} my-16`}>
        <p className={`${styles["country-deals-heading"]}  main-padding`}>
          Adventure Begins Here
        </p>
        <p className={`${styles["country-deals-title"]}  main-padding`}>
          Choose from thousands of Organized Adventures
        </p>

        <div
          className={`${styles["country-deals-cards"]} md:grid gap-4 grid-cols-4 grid-rows-3 main-padding`}
        >
          <CountryCard img={europe2} country="Europe" />
          <CountryCard img={img1} country="Turkiye" />
          <CountryCard img={img2} country="Germany" />
          <CountryCard img={img3} country="Italy" />
          <CountryCard img={img4} country="Peru" />
          <CountryCard img={img5} country="Russia" />
          <CountryCard img={img6} country="Greece" />
          <CountryCard img={img7} country="Spain" />
          <CountryCard img={img8} country="Morocco" />
          <CountryCard img={img9} country="Japan" />
          <CountryCard img={img10} country="Mexico" />
        </div>
      </div>

      <div className="popular-destinations-container mt-16">
        <p className={`${styles["destinations-heading"]} main-padding`}>
          Popular Destinations
        </p>
        <p className={`${styles["destinations-title"]} main-padding`}>
          Book the World's Best Destinations
        </p>
        <div
          className={`${styles["popular-destinations"]} main-padding md:grid gap-4 grid-cols-2 grid-rows-3 my-4`}
        >
          <Destinations
            image={europe}
            countries={europeCountries}
            continentName="Europe"
          />
          <Destinations
            image={africa}
            countries={africaCountries}
            continentName="Africa"
          />
          <Destinations
            image={asia}
            countries={asiaCountries}
            continentName="Asia"
          />
          <Destinations
            image={northAmerica}
            countries={northAmericaCountries}
            continentName="North America"
          />
          <Destinations
            image={latinAmerica}
            countries={latinAmericaCountries}
            continentName="Latin America"
          />
          <Destinations
            image={polar}
            countries={polarCountries}
            continentName="Polar"
          />
          <Destinations
            image={australia}
            countries={australiaCountries}
            continentName="Australia"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
