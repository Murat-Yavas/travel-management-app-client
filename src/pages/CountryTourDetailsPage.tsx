import CountryTourDetails from "../components/CountryTourDetails/CountryTourDetails";

interface CountryTourDetailsPageProps {
  isContinentPage?: boolean;
}

const CountryTourDetailsPage = ({
  isContinentPage,
}: CountryTourDetailsPageProps) => {
  return <CountryTourDetails isContinentPage={isContinentPage} />;
};

export default CountryTourDetailsPage;
