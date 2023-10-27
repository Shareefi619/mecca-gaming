import MainHeader from "./../components/mainHeader";
import MatchScheduleSection from "../sections/MatchScheduleSection/matchScheduleSection";
import Footer from "./../components/footer";
import ScrollToTop from './../components/scrollToTop';
import Preloader from "../components/preloader";
const MatchSchedule = () => {
  const schedule = "SCHEDULE";
  const matchSchedule = "MATCH SCHEDULE";
  return (
    <>
      <Preloader />
      <MainHeader props1={schedule} props2={matchSchedule} />
      <MatchScheduleSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MatchSchedule;
