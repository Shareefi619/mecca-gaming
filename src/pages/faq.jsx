import MainHeader from "../components/mainHeader";
import FaqArea from "../sections/FaqSection/FaqArea";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";
const Faq = () => {
  const faq = "FAQ";
  return (
    <>
      <Preloader />
      <MainHeader props1={faq} props2={faq} />
      <FaqArea />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Faq;
