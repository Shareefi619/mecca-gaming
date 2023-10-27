import MainHeader from "../components/mainHeader";
import ProductSection from './../sections/ProductDetails/productSection';
import MoreProduct from "../sections/ProductDetails/moreProduct";
import Footer from "../components/footer";
import ScrollToTop from './../components/scrollToTop';
import Preloader from "../components/preloader";


const ProductDetails = () => {
    const details = "DETAILS";
    const productDetails = "PRODUCT DETAILS";
    return (
        <>
            <Preloader />
            <MainHeader props1={details} props2={productDetails} />
            <ProductSection />
            <MoreProduct />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default ProductDetails