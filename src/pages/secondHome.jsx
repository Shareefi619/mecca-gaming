import React from 'react'
import Preloader from '../components/preloader'
import HeaderSection from '../sections/SecondHomeSection/headerSection'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'
import ResultSection from '../sections/SecondHomeSection/resultSection'
import TrendingNews from '../sections/SecondHomeSection/trendingNews'
import NewsLetter from '../components/newsLetter'
import TableNews from '../sections/SecondHomeSection/tableNews'
import MatchHighlight from '../sections/SecondHomeSection/matchHighlight'
import BlogSection from '../sections/SecondHomeSection/blogSection'
import VideoSection from '../sections/SecondHomeSection/videoSection'
import BlogTwo from '../sections/SecondHomeSection/blogTwo'
import FooterTopBar from '../sections/SecondHomeSection/footerTopBar'

const SecondHome = () => {
  return (
    <>
    <Preloader/>
    <HeaderSection/>
    <ResultSection/>
    <TrendingNews/>
    <NewsLetter/>
    <TableNews/>
    <MatchHighlight/>
    <BlogSection/>
    <VideoSection/>
    <BlogTwo/>
    <FooterTopBar/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default SecondHome