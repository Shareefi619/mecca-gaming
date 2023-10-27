import React from 'react'
import { itemsblog1, itemsblog2, itemsblog3, itemsblog4, itemsblog5, itemsblog6 } from '../../assets/images'
import { Link } from 'react-router-dom'

const TrendingNews = () => {
    return (
        <>
            {/*================= Trending News Section Start Here =================*/}
            <section className="rts-trending-news-section">
                <div className="container">
                    <div className="section-title-area section-ttile-area2">
                        <h1 className="section-title">TRENDING NEWS</h1>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="item">
                                <Link to="/newsDetails" className="gallery-picture">
                                    <img src={itemsblog1} alt="" />
                                </Link>
                                <div className="contents-wrapper">
                                    <div className="contents text-start">
                                        <div className="d-block">
                                            <div className="heading d-flex">
                                                <p className="tag">FOOTBALL</p>
                                                <span className="blog-date">JULY 21, 2023</span>
                                            </div>
                                            <div className="gallery-title">
                                                <Link to="/newsDetails">
                                                    THE WORLD CUP - WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <div className="content">
                                                <Link to="/newsDetails" className="read-more">
                                                    READ MORE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <Link to="/newsDetails" className="gallery-picture">
                                    <img src={itemsblog2} alt="" />
                                </Link>
                                <div className="contents-wrapper">
                                    <div className="contents text-start">
                                        <div className="d-block">
                                            <div className="heading d-flex">
                                                <p className="tag">FOOTBALL</p>
                                                <span className="blog-date">JULY 21, 2023</span>
                                            </div>
                                            <div className="gallery-title">
                                                <Link to="/newsDetails">
                                                    THE WORLD CUP WHAT TO EXPECT FROM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <div className="content">
                                                <Link to="/newsDetails" className="read-more">
                                                    READ MORE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <Link to="/newsDetails" className="gallery-picture">
                                    <img src={itemsblog3} alt="" />
                                </Link>
                                <div className="contents-wrapper">
                                    <div className="contents text-start">
                                        <div className="d-block">
                                            <div className="heading d-flex">
                                                <p className="tag">FOOTBALL</p>
                                                <span className="blog-date">JULY 21, 2023</span>
                                            </div>
                                            <div className="gallery-title">
                                                <Link to="/newsDetails">
                                                    THE WORLD CUP WHAT TO EXPECT FROM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <div className="content">
                                                <Link to="/newsDetails" className="read-more">
                                                    READ MORE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <Link to="/newsDetails" className="gallery-picture">
                                    <img src={itemsblog4} alt="" />
                                </Link>
                                <div className="contents-wrapper">
                                    <div className="contents text-start">
                                        <div className="d-block">
                                            <div className="heading d-flex">
                                                <p className="tag">FOOTBALL</p>
                                                <span className="blog-date">JULY 21, 2023</span>
                                            </div>
                                            <div className="gallery-title">
                                                <Link to="/newsDetails">
                                                    THE WORLD CUP WHAT TO EXPECT FROM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <div className="content">
                                                <Link to="/newsDetails" className="read-more">
                                                    READ MORE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <Link to="/newsDetails" className="gallery-picture">
                                    <img src={itemsblog5} alt="" />
                                </Link>
                                <div className="contents-wrapper">
                                    <div className="contents text-start">
                                        <div className="d-block">
                                            <div className="heading d-flex">
                                                <p className="tag">FOOTBALL</p>
                                                <span className="blog-date">JULY 21, 2023</span>
                                            </div>
                                            <div className="gallery-title">
                                                <Link to="/newsDetails">
                                                    THE WORLD CUP WHAT TO EXPECT FROM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <div className="content">
                                                <Link to="/newsDetails" className="read-more">
                                                    READ MORE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="item">
                                <Link to="/newsDetails" className="gallery-picture">
                                    <img src={itemsblog6} alt="" />
                                </Link>
                                <div className="contents-wrapper">
                                    <div className="contents text-start">
                                        <div className="d-block">
                                            <div className="heading d-flex">
                                                <p className="tag">FOOTBALL</p>
                                                <span className="blog-date">JULY 21, 2023</span>
                                            </div>
                                            <div className="gallery-title">
                                                <Link to="/newsDetails">
                                                    THE WORLD CUP WHAT TO EXPECT FROM
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <div className="content">
                                                <Link to="/newsDetails" className="read-more">
                                                    READ MORE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Trending News Section End Here =================*/}
        </>

    )
}

export default TrendingNews;