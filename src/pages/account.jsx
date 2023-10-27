import React from 'react'
import MainHeader from '../components/mainHeader';
import Footer from '../components/footer';
import AccountSection from '../sections/AccountSection/accountSection';
import ScrollToTop from './../components/scrollToTop';
import Preloader from '../components/preloader';

const Account = () => {
    const acc = "ACCOUNT"
  return (
    <>
    <Preloader/>
    <MainHeader props1={acc} props2={acc}/>
    <AccountSection/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default Account;