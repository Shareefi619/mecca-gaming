
import { Link } from 'react-router-dom'
import { img4, img5, shape1, shape2 } from '../../assets/images'

const About = () => {
    return (
        <div className="rts-about-section section-gap">
            <div className="shape1"><img src={shape2} alt="" /></div>
            <div className="shape2"><img src={shape1} alt="" /></div>
            <div className="container-1">
                <div className="about-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="about-thumb">
                                <div className="img1"><img src={img4} alt="about-thumb" /></div>
                                <div className="img2"><img src={img5} alt="about-thumb" /></div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="contents">
                                <div className="section-title-area section-title-area1 text-start">
                                    <span className="pretitle">GAMES</span>
                                    <h1 className="section-title"><span>ABOUT THE</span> <br /> CLUB Mecca of Gaming</h1>
                                    <p>Nulla habitant commodo euismod feugiat aenean quisque platea ac, nisl potenti <br />
                                        fusce conubia ventis blandit iaculis, curabitur enim inceptos a odio taciti sapien. <br />
                                        Dictumst dis metus inceptos curae fermentum nvel, ridiculus a dapibus egestas <br />
                                        penatibus mus, cubilia fusce iaculis</p>

                                    <ul className='pt-4'>
                                        <li className="player">
                                            <p className="sub">MANAGER</p>
                                            <h3 className="title">PRO 05</h3>
                                        </li>
                                        <li className="player">
                                            <p className="sub">PLAYERS</p>
                                            <h3 className="title">PRO 107</h3>
                                        </li>
                                        <li className="player">
                                            <p className="sub">COACH</p>
                                            <h3 className="title">PRO 19</h3>
                                        </li>
                                    </ul>
                                    <Link to="/teamDetails" className="more-btn">OUR TEAM <i className="fal fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About