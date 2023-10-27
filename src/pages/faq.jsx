import MainHeader from "../components/mainHeader";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";
import FaqArea from './../sections/FaqSection/faqArea';
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
