import MainHeader from "../components/mainHeader";
import History from "../sections/HistorySection/history";
import Videosection from "../components/videosection";
import Award from "../sections/HistorySection/award";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";
const HistorySection = () => {
  const history = "History";
  const teamHistory = "Team History";
  return (
    <>
      <Preloader />
      <MainHeader props1={history} props2={teamHistory} />
      <History />
      <Videosection />
      <Award />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HistorySection;
