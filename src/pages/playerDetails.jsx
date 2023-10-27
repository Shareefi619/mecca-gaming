import MainHeader from "../components/mainHeader";
import PlayerDetail from "../sections/PlayerDetailSection/playerDetail";
import PlayerActivity from "../sections/PlayerDetailSection/playerActivity";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";
const PlayerDetails = () => {
  const playerDetails = ["Player Details"];
  return (
    <>
      <Preloader />
      <MainHeader props1={playerDetails} props2={playerDetails} />
      <PlayerDetail />
      <PlayerActivity />
      <Gallery />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PlayerDetails;
