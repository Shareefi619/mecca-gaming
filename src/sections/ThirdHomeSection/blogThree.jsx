import React from 'react'
import { blog12, blog13, blog14 } from '../../assets/images';
import { Link } from 'react-router-dom';

const BlogThree = () => {
    return (
        <>
            {/*================= Blog Section Start Here =================*/}
            <section className="rts-blog-section3 section4 section-gap">
                <div className="container">
                    <div className="section-inner">
                        <div className="section-title-area section-ttile-area2">
                            <h1 className="section-title">LATEST INSIGHTS</h1>
                        </div>
                        <div className="blog-area">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog-item">
                                        <div className="blog-picture">
                                            <img src={blog12} alt="" />
                                        </div>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <span className="blog-date">
                                                            15 DECEMBER, 2023 - NATIONAL
                                                        </span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">CREDIBLE SPORTS MATCH</Link>
                                                    </div>
                                                    <p className="desc">
                                                        Dictum primis ligula sodales inceptos leo mauris taciti,
                                                        viverra nostra vulputate donec litora
                                                    </p>
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog-item">
                                        <div className="blog-picture">
                                            <img src={blog13} alt="" />
                                        </div>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <span className="blog-date">
                                                            15 DECEMBER, 2023 - CLUB
                                                        </span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">VERY EXICITING MATCH</Link>
                                                    </div>
                                                    <p className="desc">
                                                        Dictum primis ligula sodales inceptos leo mauris taciti,
                                                        viverra nostra vulputate donec litora
                                                    </p>
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog-item">
                                        <div className="blog-picture">
                                            <img src={blog14} alt="" />
                                        </div>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <span className="blog-date">
                                                            15 DECEMBER, 2023 - OTHERS
                                                        </span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">VERY EXICITING MATCH</Link>
                                                    </div>
                                                    <p className="desc">
                                                        Dictum primis ligula sodales inceptos leo mauris taciti,
                                                        viverra nostra vulputate donec litora
                                                    </p>
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

export default BlogThree;