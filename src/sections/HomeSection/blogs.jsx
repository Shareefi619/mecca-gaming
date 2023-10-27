import React from 'react'
import { author2, author3, blog1, blog2, blog3 } from '../../assets/images'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div class="rts-blog-section section-gap">
            <div class="container">
                <div class="section-title-area section-title-area1 text-center mb--50">
                    <span class="pretitle">INSIGHTS</span>
                    <h1 class="section-title">OUR LATEST NEWS</h1>
                    <p>It is one of the most popular football clubs that offer training programs
                        for the youth, as well as summer camps.</p>
                </div>
                <div class="blog-area">
                    <div class="row">
                        <div class="col-xl-4 col-md-6">
                            <div class="blog-item">
                                <div class="blog-picture"><img src={blog1} alt="" /></div>
                                <div class="contents-wrapper">
                                    <div class="contents">
                                        <div class="d-block">
                                            <Link to="#" class="blog-catagory">FOOTBALL</Link>
                                            <Link to="/newsDetails" class="blog-title">THE ENGLISH LEAGUE – WHAT TO
                                                EXPECT
                                                FROM
                                                ENGLAND FOOTBALL CLUB</Link>
                                        </div>
                                        <div class="author-info">
                                            <div class="author-dp"><img src={author2}
                                                alt="author-dp" /></div>
                                            <div class="content">
                                                <Link to="#" class="author-name">CLUB DA AUTHOR</Link>
                                                <div class="blog-date">
                                                    <div class="date">June 21, 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="blog-item">
                                <div class="blog-picture"><img src={blog2} alt="" /></div>
                                <div class="contents-wrapper">
                                    <div class="contents">
                                        <div class="d-block">
                                            <Link to="#" class="blog-catagory">FOOTBALL</Link>
                                            <Link to="/newsDetails" class="blog-title">THE LA LIGA – WHAT TO EXPECT
                                                FROM
                                                SPANISH FOOTBALL CLUB</Link>
                                        </div>
                                        <div class="author-info">
                                            <div class="author-dp"><img src={author2}
                                                alt="author-dp" /></div>
                                            <div class="content">
                                                <Link to="#" class="author-name">CLUB DA AUTHOR</Link>
                                                <div class="blog-date">
                                                    <div class="date">June 21, 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="blog-item">
                                <div class="blog-picture"><img src={blog3} alt="" /></div>
                                <div class="contents-wrapper">
                                    <div class="contents">
                                        <div class="d-block">
                                            <Link to="#" class="blog-catagory">FOOTBALL</Link>
                                            <Link to="/newsDetails" class="blog-title">THE UCL – WHAT TO EXPECT
                                                FROM
                                                ALL OVER FOOTBALL CLUB</Link>
                                        </div>
                                        <div class="author-info">
                                            <div class="author-dp"><img src={author3}
                                                alt="author-dp" /></div>
                                            <div class="content">
                                                <Link to="#" class="author-name">CLUB DA AUTHOR</Link>
                                                <div class="blog-date">
                                                    <div class="date">June 21, 2022</div>
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
        </div>
    )
}

export default Blogs