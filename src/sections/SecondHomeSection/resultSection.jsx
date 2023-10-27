import React from 'react'
import { blog10, blog11, blog8, blog9 } from '../../assets/images'
import { Link } from 'react-router-dom'

const ResultSection = () => {
    return (
        <>
            {/*================= Match Result Section Start Here =================*/}
            <section className="rts-single-news-section section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="item">
                                    <Link to="/newsDetails" className="gallery-picture">
                                        <img src={blog8} alt="" />
                                    </Link>
                                    <div className="contents-wrapper">
                                        <div className="contents text-start">
                                            <div className="d-block">
                                                <div className="heading d-flex">
                                                    <p className="tag">FOOTBALL</p>
                                                    <span className="blog-date">JULY 21, 2023</span>
                                                </div>
                                                <div className="gallery-title">
                                                    <Link to="/newsDetails">WHAT TO EXPECT FROM</Link>
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
                                        <img src={blog9} alt="" />
                                    </Link>
                                    <div className="contents-wrapper">
                                        <div className="contents text-start">
                                            <div className="d-block">
                                                <div className="heading d-flex">
                                                    <p className="tag">FOOTBALL</p>
                                                    <span className="blog-date">JULY 21, 2023</span>
                                                </div>
                                                <div className="gallery-title">
                                                    <Link to="/newsDetails">WHAT TO EXPECT FROM</Link>
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
                                        <img src={blog10} alt="" />
                                    </Link>
                                    <div className="contents-wrapper">
                                        <div className="contents text-start">
                                            <div className="d-block">
                                                <div className="heading d-flex">
                                                    <p className="tag">FOOTBALL</p>
                                                    <span className="blog-date"> JULY 21, 2023</span>
                                                </div>
                                                <div className="gallery-title">
                                                    <Link to="/newsDetails">WHAT TO EXPECT FROM</Link>
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
                                        <img src={blog11} alt="" />
                                    </Link>
                                    <div className="contents-wrapper">
                                        <div className="contents text-start">
                                            <div className="d-block">
                                                <div className="heading d-flex">
                                                    <p className="tag">FOOTBALL</p>
                                                    <span className="blog-date"> JULY 21, 2023</span>
                                                </div>
                                                <div className="gallery-title">
                                                    <Link to="/newsDetails">WHAT TO EXPECT FROM</Link>
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
                </div>
            </section>
            {/*================= Match Result Section End Here =================*/}
        </>

    )
}

export default ResultSection