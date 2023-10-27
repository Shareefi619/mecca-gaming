import MainHeader from './../components/mainHeader';
import CartSection from '../sections/CartSection/cartSection';
import Footer from './../components/footer';
import ScrollToTop from '../components/scrollToTop';
import Preloader from '../components/preloader';

const Cart = () => {
    const cart = "CART";
    const cartDetails = "CART DETAILS";
    return (
        <>
            <Preloader />
            <MainHeader props1={cart} props2={cartDetails} />
            <CartSection />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Cart