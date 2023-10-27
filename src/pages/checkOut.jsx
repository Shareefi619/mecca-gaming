import MainHeader from "../components/mainHeader";
import Preloader from "../components/preloader";
import ScrollToTop from "../components/scrollToTop";
import CheckoutSection from "../sections/Checkout/checkoutSection";
import Footer from './../components/footer';
const CheckOut = () => {
    const check = "CHECKOUT"
  return (
    <>
    <Preloader/>
    <MainHeader props1={check} props2={check}/>
    <CheckoutSection/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default CheckOut;