import MainHeader from "../components/mainHeader";
import About from "../sections/AboutSection/about";
import CounterUpSection from "../sections/AboutSection/counterUp";
import ChampionSection from "../sections/AboutSection/championSection";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import ScrollToTop from './../components/scrollToTop';
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  // Import any other images you need here
} from "../assets/images";
import Preloader from "../components/preloader";

const AboutUs = () => {
  const about = ["About Us"];

  // Create an array of sponsor images
  const sponsorImages = [brand1, brand2, brand3, brand4, brand5, brand6, brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <>
      <Preloader />
      <MainHeader props1={about} props2={about} />
      <About />
      <CounterUpSection />
      <ChampionSection />
      <Sponsors sponsorImages={sponsorImages} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
