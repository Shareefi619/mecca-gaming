import Header from "../components/header";
import Latestmatch from "../components/latestmatch";
import Gallery from "../components/gallery";
import Nextmatch from "../sections/HomeSection/nextmatch";
import About from "../sections/HomeSection/about";
import Sponsors from "../components/sponsors";
import Videosection from "../components/videosection";
import Teamsection from "../sections/HomeSection/teamsection";
import Newsletter from "../sections/HomeSection/newsletter";
import Blogs from "../sections/HomeSection/blogs";
import Footer from "../components/footer";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  // Import any other images you need here
} from "../assets/images";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";

const Home = () => {
  // Create an array of sponsor images
  const sponsorImages = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
  ];

  return (
    <>
      <Preloader />
      <Header />
      <Latestmatch />
      <Gallery />
      <Nextmatch />
      <About />
      <Sponsors sponsorImages={sponsorImages} />
      <Videosection />
      <Teamsection />
      <Newsletter />
      <Blogs />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
