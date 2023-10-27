import React from 'react'
import { team1, team2, team3, team4 } from '../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules

import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Teamsection = () => {
    return (
        <div className="rts-team-section section-gap">
            <div className="container">
                <div className="section-title-area section-title-area1 text-center mb--50">
                    <span className="pretitle">PLAYERS</span>
                    <h1 className="section-title">CLUB MEMBERS</h1>
                    <p>It is one of the most popular football clubs that offer training programs
                        for the youth, as well as summer camps.</p>
                </div>
                <div className="team-section-inner">
                    <div className="swiper rts-teamSlider">
                        <Swiper
                            spaceBetween={20}
                            centeredSlides={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}

                            navigation={false}
                            slidesPerView={3} // Set the number of slides per view
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                            pagination={{
                                clickable: true,
                            }}
                        >
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="team-wraper">
                                            <div className="player-card">
                                                <Link className="image" to="/playerDetails"><img src={team1} alt="" /></Link>
                                                <div className="number">11</div>
                                                <ul className="social-area">
                                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="profile">
                                                <p className="position">FORWARD</p>
                                                <Link to="/playerDetails" className="name">MAXIELS DAVID</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="team-wraper">
                                            <div className="player-card">
                                                <Link className="image" to="/playerDetails"><img src={team2} alt="" /></Link>
                                                <div className="number">7</div>
                                                <ul className="social-area">
                                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="profile">
                                                <p className="position">WINGER</p>
                                                <Link to="/playerDetails" className="name">VEN DIESEL</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="team-wraper">
                                            <div className="player-card">
                                                <Link className="image" to="/playerDetails"><img src={team3} alt="" /></Link>
                                                <div className="number">9</div>
                                                <ul className="social-area">
                                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="profile">
                                                <p className="position">WINGER</p>
                                                <Link to="/playerDetails" className="name">NED STARK</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="team-wraper">
                                            <div className="player-card">
                                                <Link className="image" to="/playerDetails"><img src={team4} alt="" /></Link>
                                                <div className="number">10</div>
                                                <ul className="social-area">
                                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="profile">
                                                <p className="position">MID-FIELDER</p>
                                                <Link to="/playerDetails" className="name">JOHN WICK</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teamsection