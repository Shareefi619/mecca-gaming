import MainHeader from "./../components/mainHeader";
import EventSection from "../sections/EventSection/eventSection";
import Footer from "./../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";
const Event = () => {
  const event = "EVENT";
  const ourEvent = "OUR EVENT";
  return (
    <>
      <Preloader />
      <MainHeader props1={event} props2={ourEvent} />
      <EventSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Event;
