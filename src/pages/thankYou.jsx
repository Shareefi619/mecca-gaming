import MainHeader from './../components/mainHeader';
import Footer from './../components/footer';
import Preloader from '../components/preloader';
import ThankYouSection from './../sections/ThankyouSection/thankYouSection';
const ThankYou = () => {
    const thank = "THANK YOU"
    return (
        <>
            <Preloader />
            <MainHeader props1={thank} props2={thank} />
            <ThankYouSection />
            <Footer />
        </>
    )
}

export default ThankYou;