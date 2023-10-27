import React from 'react'
import MainHeader from '../components/mainHeader'
import Footer from '../components/footer'
import BlogSection from '../sections/NewsSection/blogSection';
import ScrollToTop from './../components/scrollToTop';
import Preloader from '../components/preloader';

const News = () => {
    const news = "NEWS";
    const latestNews = " LATEST NEWS"
    return (
        <>
            <Preloader />
            <MainHeader props1={news} props2={latestNews} />
            <BlogSection />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default News;