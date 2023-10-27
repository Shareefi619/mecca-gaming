import MainHeader from "../components/mainHeader";
import AwardSection from "../sections/AwardSection/awardSection";
import MatchResult from "../sections/AwardSection/matchResult";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";
const Award = () => {
  const about = "ABOUT US";
  const league = "LEAGUE STANDINGS"
  return (
    <>
      <Preloader />
      <MainHeader props1={about} props2={league} />
      <AwardSection />
      <MatchResult />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Award;
