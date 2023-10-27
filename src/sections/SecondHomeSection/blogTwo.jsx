import React from 'react'
import { blog1, blog2, blog3 } from '../../assets/images'
import { Link } from 'react-router-dom'

const BlogTwo = () => {
    return (
        <>
            {/*================= Blog Section Start Here =================*/}
            <section className="rts-blog-section3 section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="section-title-area section-ttile-area2">
                            <h1 className="section-title">NEWS INSIGHTS</h1>
                        </div>
                        <div className="blog-area">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="blog-item">
                                        <div className="blog-picture">
                                            <img src={blog1} alt="" />
                                        </div>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 2023</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP WHAT TO EXPECT MATCH
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
                                <div className="col-xl-4 col-md-6">
                                    <div className="blog-item">
                                        <div className="blog-picture">
                                            <img src={blog2} alt="" />
                                        </div>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 2023</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP WHAT TO EXPECT MATCH
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
                                <div className="col-xl-4 col-md-6">
                                    <div className="blog-item">
                                        <div className="blog-picture">
                                            <img src={blog3} alt="" />
                                        </div>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 2023</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP WHAT TO EXPECT MATCH
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
                    </div>
                </div>
            </section>
            {/*================= Blog Section Section End Here =================*/}
        </>

    )
}

export default BlogTwo