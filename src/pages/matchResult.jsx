import MainHeader from "./../components/mainHeader";
import RecapSection from './../sections/MatchResultSection/recapSection';
import InsightSection from "../sections/MatchResultSection/insightSection";
import LocationSection from './../sections/MatchResultSection/locationSection';
import ResultSection from "../sections/MatchResultSection/resultSection";
import TrainerSection from "../sections/MatchResultSection/trainerSection";
import ScrollToTop from './../components/scrollToTop';
import Footer from "./../components/footer";
import Preloader from "../components/preloader";



const MatchResult = () => {
  const result = "RESULT";
  const matchResult = "MATCH RESULT";
  return (
    <>
      <Preloader />
      <MainHeader props1={result} props2={matchResult} />
      <RecapSection />
      <InsightSection />
      <LocationSection />
      <ResultSection />
      <TrainerSection />
      <ScrollToTop />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MatchResult;
