import MainHeader from './../components/mainHeader';
import Footer from './../components/footer';
import ThankYouSection from '../sections/ThankyouSection/ThankYouSection';
import Preloader from '../components/preloader';
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