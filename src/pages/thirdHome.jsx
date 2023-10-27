import HeaderSectionThree from './../sections/ThirdHomeSection/headerSectionThree';
import Preloader from './../components/preloader';
import Footer from './../components/footer';
import ScrollToTop from './../components/scrollToTop';
import BannerThree from '../sections/ThirdHomeSection/bannerThree';
import FeatureSection from '../sections/ThirdHomeSection/featureSection';
import ShopProduct from '../sections/ThirdHomeSection/shopProduct';
import NewsLetter from './../components/newsLetter';
import BlogThree from '../sections/ThirdHomeSection/blogThree';
const ThirdHome = () => {
    return (
        <>
            <Preloader />
            <HeaderSectionThree />
            <BannerThree/>
            <FeatureSection/>
            <ShopProduct/>
            <NewsLetter/>
            <BlogThree/>
            <Footer />
            <ScrollToTop />

        </>
    )
}

export default ThirdHome