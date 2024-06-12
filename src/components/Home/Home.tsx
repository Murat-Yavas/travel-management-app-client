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

const Home = () => {
  return (
    <>
      <div className="container mx-auto bg-lime-50 rounded-lg p-1 mt-8">
        <form>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-2 "
              type="text"
              placeholder="Search countries, cities..."
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <select
                id="Com"
                className="text-base text-gray-800 outline-none border-2 border-lime-300 px-4 py-2 rounded-lg"
              >
                <option value="tours" defaultValue="Tours">
                  Tours
                </option>
                <option value="hotels">Hotels</option>
              </select>
              <button className="bg-lime-300 text-white text-base rounded-lg px-4 py-2 font-thin">
                Search
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

        <div className="grid gap-4 grid-cols-4 grid-rows-3 main-padding">
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
          className={`${styles["popular-destinations"]} main-padding grid gap-4 grid-cols-2 grid-rows-3 my-4`}
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
