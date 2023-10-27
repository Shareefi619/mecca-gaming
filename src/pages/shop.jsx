import MainHeader from './../components/mainHeader';
import ShopSection from '../sections/ShopSection/shopSection';
import ScrollToTop from './../components/scrollToTop';
import Footer from './../components/footer';
import Preloader from '../components/preloader';

const Shop = () => {
    const shop = "SHOP";
    const ourShop = "OUR SHOP";

    return (
        <>
            <Preloader />
            <MainHeader props1={shop} props2={ourShop} />
            <ShopSection />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Shop