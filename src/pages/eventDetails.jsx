import MainHeader from "./../components/mainHeader";
import Footer from "./../components/footer";
import EventDetailSection from "./../sections/EventDetailSection/eventDetailSection";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";
const EventDetails = () => {
  const event = "EVENT DETAILS";
  return (
    <>
      <Preloader />
      <MainHeader props1={event} props2={event} />
      <EventDetailSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default EventDetails;
