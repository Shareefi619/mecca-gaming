import React from 'react'
import MainHeader from '../components/mainHeader'
import Footer from '../components/footer'
import ContactUsSection from '../sections/ContactUsSection/contactUsSection';
import ScrollToTop from '../components/scrollToTop';
import Preloader from '../components/preloader';

const ContactUs = () => {
    const contact = "CONTACT";
    const contactUs = "CONTACT US";
  return (
    <>
    <Preloader/>
    <MainHeader props1={contact} props2={contactUs}/>
    <ContactUsSection/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default ContactUs