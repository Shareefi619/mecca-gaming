import React from 'react'
import { ig10, ig11, ig12, ig13 } from '../../assets/images'
import { Link } from 'react-router-dom'

const MatchHighlight = () => {
    return (
        <>
            {/*================= Match Highlights Section Start Here =================*/}
            <section className="rts-match-highlights-section pt--100 pb--100">
                <div className="container">
                    <div className="section-title-area section-ttile-area2">
                        <h1 className="section-title">MATCH HIGHLIGHTS</h1>
                    </div>
                    <div className="match-highlights-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="section-wraper">
                                    <div className="video-area">
                                        <div className="image">
                                            <Link to="#">
                                                <img src={ig10} alt="" />
                                            </Link>
                                        </div>
                                        <div className="video-section-inner text-center">
                                            <div className="play-video">
                                                <a
                                                    className="popup-video"
                                                    to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                                                >
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                        </div>
                                        <span className="time">
                                            <Link to="#">
                                                <i className="fas fa-play" /> 06:00PM
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            <Link to="#">ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY</Link>
                                        </div>
                                        <p className="date">15 DECEMBER 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="section-wraper">
                                    <div className="video-area">
                                        <div className="image">
                                            <Link to="#">
                                                <img src={ig11} alt="" />
                                            </Link>
                                        </div>
                                        <div className="video-section-inner text-center">
                                            <div className="play-video">
                                                <a
                                                    className="popup-video"
                                                    to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                                                >
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                        </div>
                                        <span className="time">
                                            <Link to="#">
                                                <i className="fas fa-play" /> 06:00PM
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            <Link to="#">ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY</Link>
                                        </div>
                                        <p className="date">15 DECEMBER 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="section-wraper">
                                    <div className="video-area">
                                        <div className="image">
                                            <Link to="#">
                                                <img src={ig12} alt="" />
                                            </Link>
                                        </div>
                                        <div className="video-section-inner text-center">
                                            <div className="play-video">
                                                <a
                                                    className="popup-video"
                                                    to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                                                >
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                        </div>
                                        <span className="time">
                                            <Link to="#">
                                                <i className="fas fa-play" /> 06:00PM
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            <Link to="#">ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY</Link>
                                        </div>
                                        <p className="date">15 DECEMBER 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="section-wraper">
                                    <div className="video-area">
                                        <div className="image">
                                            <Link to="#">
                                                <img src={ig13} alt="" />
                                            </Link>
                                        </div>
                                        <div className="video-section-inner text-center">
                                            <div className="play-video">
                                                <a
                                                    className="popup-video"
                                                    to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                                                >
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                        </div>
                                        <span className="time">
                                            <Link to="#">
                                                <i className="fas fa-play" /> 06:00PM
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            <Link to="#">ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY</Link>
                                        </div>
                                        <p className="date">15 DECEMBER 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Match Highlights Section End Here =================*/}
        </>

    )
}

export default MatchHighlight