import MainHeader from "./../components/mainHeader";
import Latestmatch from "../components/latestmatch";
import PointTable from './../sections/LeagueSection/pointTable';
import Footer from "./../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";


const LeagueStandings = () => {
  const point = "POINT TABLE";
  const league = "LEAGUE STANDINGS";
  return (
    <>
      <Preloader />
      <MainHeader props1={point} props2={league} />
      <Latestmatch />
      <PointTable />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LeagueStandings;
