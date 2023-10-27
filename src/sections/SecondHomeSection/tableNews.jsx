import React from 'react'
import { blogsm, blogsm2, blogsm3, itemsblog7 } from '../../assets/images'
import { Link } from 'react-router-dom'

const TableNews = () => {
    return (
        <>
            {/*================= Trending News Section Start Here =================*/}
            <section className="rts-trending-news-section2 pb--100">
                <div className="container">
                    <div className="section-inner">
                        <div className="section-title-area section-ttile-area2">
                            <h1 className="section-title">TRENDING NEWS</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="item">
                                    <Link to="/newsDetails" className="gallery-picture">
                                        <img src={itemsblog7} alt="" />
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
                                                        THE WORLD CUP - WHAT TO EXPECT FROM ENGLAND FOOTBALL
                                                        CLUB
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
                            <div className="col-lg-4 col-md-6">
                                <div className="rts-post-small">
                                    <Link to="/newsDetails" className="gallery-picture">
                                        <img src={blogsm} alt="" />
                                    </Link>
                                    <div className="contents-wrapper">
                                        <div className="contents text-start">
                                            <div className="d-block">
                                                <div className="heading align-items-center d-flex">
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
                                <div className="rts-post-small">
                                    <Link to="/newsDetails" className="gallery-picture">
                                        <img src={blogsm2} alt="" />
                                    </Link>
                                    <div className="contents-wrapper">
                                        <div className="contents text-start">
                                            <div className="d-block">
                                                <div className="heading align-items-center d-flex">
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
                                <div className="rts-post-small">
                                    <Link to="/newsDetails" className="gallery-picture">
                                        <img src={blogsm3} alt="" />
                                    </Link>
                                    <div className="contents-wrapper">
                                        <div className="contents text-start">
                                            <div className="d-block">
                                                <div className="heading align-items-center d-flex">
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
                            <div className="col-lg-4 col-md-6">
                                <div className="premier-league-area side-table-item side-item">
                                    <div className="side-item-inner">
                                        <h3 className="side-content-title">PREMIER LEAGUE</h3>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr className="head-tr">
                                                    <th scope="col">POS</th>
                                                    <th scope="col">CLUB</th>
                                                    <th scope="col">W</th>
                                                    <th scope="col">D</th>
                                                    <th scope="col">L</th>
                                                    <th scope="col">PTS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span className="position-number">01</span>
                                                    </td>
                                                    <td>
                                                        <div className="player-name-area">
                                                            <h4 className="player-name">Mecca of Gaming F.C.</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="match-count">10</span>
                                                    </td>
                                                    <td>
                                                        <span className="win-count">2</span>
                                                    </td>
                                                    <td>
                                                        <span className="draw-count">0</span>
                                                    </td>
                                                    <td>
                                                        <span className="lose-count">32</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="position-number">02</span>
                                                    </td>
                                                    <td>
                                                        <div className="player-name-area">
                                                            <h4 className="player-name">Mecca of Gaming F.C.</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="match-count">10</span>
                                                    </td>
                                                    <td>
                                                        <span className="win-count">2</span>
                                                    </td>
                                                    <td>
                                                        <span className="draw-count">0</span>
                                                    </td>
                                                    <td>
                                                        <span className="lose-count">32</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="position-number">03</span>
                                                    </td>
                                                    <td>
                                                        <div className="player-name-area">
                                                            <h4 className="player-name">Mecca of Gaming F.C.</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="match-count">10</span>
                                                    </td>
                                                    <td>
                                                        <span className="win-count">2</span>
                                                    </td>
                                                    <td>
                                                        <span className="draw-count">0</span>
                                                    </td>
                                                    <td>
                                                        <span className="lose-count">32</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="position-number">04</span>
                                                    </td>
                                                    <td>
                                                        <div className="player-name-area">
                                                            <h4 className="player-name">Mecca of Gaming F.C.</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="match-count">10</span>
                                                    </td>
                                                    <td>
                                                        <span className="win-count">2</span>
                                                    </td>
                                                    <td>
                                                        <span className="draw-count">0</span>
                                                    </td>
                                                    <td>
                                                        <span className="lose-count">32</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="position-number">05</span>
                                                    </td>
                                                    <td>
                                                        <div className="player-name-area">
                                                            <h4 className="player-name">Mecca of Gaming F.C.</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="match-count">10</span>
                                                    </td>
                                                    <td>
                                                        <span className="win-count">2</span>
                                                    </td>
                                                    <td>
                                                        <span className="draw-count">0</span>
                                                    </td>
                                                    <td>
                                                        <span className="lose-count">32</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="position-number">06</span>
                                                    </td>
                                                    <td>
                                                        <div className="player-name-area">
                                                            <h4 className="player-name">Mecca of Gaming F.C.</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="match-count">10</span>
                                                    </td>
                                                    <td>
                                                        <span className="win-count">2</span>
                                                    </td>
                                                    <td>
                                                        <span className="draw-count">0</span>
                                                    </td>
                                                    <td>
                                                        <span className="lose-count">32</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Link to="#" className="full-table-btn more-btn btn">
                                            VIEW FULL TABLE
                                        </Link>
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

export default TableNews