import { Link } from 'react-router-dom'
import { logo, news1, news2, news3, news4, news5, news6 } from '../assets/images'

const Footer = () => {
    return (
        <div className="footer footer1">
            <div className="container">
                <div className="footer-inner">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="footer-widget">
                                <div className="footer-logo"><img src={logo} alt="footer-logo" />
                                </div>
                                <p className="footer-text">It was the end of a period in the 1980s
                                    in which it seemed like every NBA Finals
                                    matchup featured the Celtics sports club.</p>
                                <div className="social-links">
                                    <Link to="#" className="platform"><i
                                        className="fab fa-facebook-f"></i></Link>
                                    <Link to="#" className="platform"><i
                                        className="fab fa-twitter"></i></Link>
                                    <Link to="#" className="platform"><i
                                        className="fab fa-behance"></i></Link>
                                    <Link to="#" className="platform"><i
                                        className="fab fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h3 className="footer-widget-title"><span className="decorator"></span> ESSENTIAL LINKS</h3>
                                <ul className="widget-items cata-widget">
                                    <li className="widget-list-item"><Link to="/about">ABOUT CLUB</Link></li>
                                    <li className="widget-list-item"><Link to="/contactUs">CONTACTS</Link></li>
                                    <li className="widget-list-item"><Link to="/shop">SHOP</Link></li>
                                    <li className="widget-list-item"><Link to="/teamDetails">TEAM DETAILS</Link></li>
                                    <li className="widget-list-item"><Link to="/playerDetails">OUR PLAYERS</Link></li>
                                    <li className="widget-list-item"><Link to="/event">EVENT</Link></li>
                                    <li className="widget-list-item"><Link to="/eventDetails">EVENT DETAILS</Link></li>
                                    <li className="widget-list-item"><Link to="/history">OUR HISTORY</Link></li>
                                    <li className="widget-list-item"><Link to="/gallery">GALLERY</Link></li>
                                    <li className="widget-list-item"><Link to="/award">AWARDS</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="footer-widget address-widget">
                                <h3 className="footer-widget-title"><span className="decorator"></span> GET IN TOUCH</h3>
                                <ul>
                                    <li className="widget-list-item"><i className="fas fa-envelope-open"></i>
                                    <Link to="mailto:info@webmail.com">INFO@WEBMAIL.COM</Link></li>
                                    <li className="widget-list-item"><i className="fas fa-phone"></i><Link to="tel:09877788890">098
                                        777
                                        888 90</Link></li>
                                    <li className="widget-list-item"><i className="fas fa-map-marker-alt"></i> <span>USA, CALIFORNIA
                                        20,
                                        FIRST <br />
                                        AVENUE, CALIFORNIA</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="footer-widget news-widget">
                                <h3 className="footer-widget-title"><span className="decorator"></span> POST GALLERY</h3>
                                <div className="recent-post">
                                    <div className="picture">
                                        <Link to="/newsDetails">
                                            <img src={news1} alt="side-post-image" />
                                        </Link>
                                    </div>
                                    <div className="picture">
                                        <Link to="/newsDetails">
                                            <img src={news2} alt="side-post-image" />
                                        </Link>
                                    </div>
                                    <div className="picture">
                                        <Link to="/newsDetails">
                                            <img src={news3} alt="side-post-image" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="recent-post post2">
                                    <div className="picture">
                                        <Link to="/newsDetails">
                                            <img src={news4} alt="side-post-image" />
                                        </Link>
                                    </div>
                                    <div className="picture">
                                        <Link to="/newsDetails">
                                            <img src={news5} alt="side-post-image" />
                                        </Link>
                                    </div>
                                    <div className="picture">
                                        <Link to="/newsDetails">
                                            <img src={news6} alt="side-post-image" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="bottom-area-inner">
                        <span className="copyright">COPYRIGHT & DESIGN BY <span className="brand">MECCA OF GAMING</span> - 2023</span>
                        <div className="footer-bottom-links">
                            <Link to="#">TERMS & CONDITONS</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="#">CAREER</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;