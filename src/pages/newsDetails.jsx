import React from 'react'
import MainHeader from '../components/mainHeader'
import Footer from '../components/footer'
import NewsDetailSection from '../sections/NewsDetailSection/newsDetailSection';
import ScrollToTop from './../components/scrollToTop';
import Preloader from '../components/preloader';

const NewsDetails = () => {
    const newsDetails = "NEWS DETAILS";
  return (
    <>
    <Preloader/>
    <MainHeader props1={newsDetails} props2={newsDetails}/>
    <NewsDetailSection/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default NewsDetails