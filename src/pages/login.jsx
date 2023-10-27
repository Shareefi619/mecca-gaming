import MainHeader from "../components/mainHeader";
import Footer from './../components/footer';
import LoginSection from './../sections/LoginSection/loginSection';
import Preloader from './../components/preloader';
import ScrollToTop from './../components/scrollToTop';
const Login = () => {
    const contact = "CONTACT";
    const contactUs = "CONTACT US";
    return (
        <>
            <Preloader />
            <MainHeader props1={contact} props2={contactUs} />
            <LoginSection />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Login;