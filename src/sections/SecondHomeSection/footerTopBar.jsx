import React from 'react'
import { logo } from '../../assets/images'

const FooterTopBar = () => {
    return (
        <>
            <div className='footer footer1 footer3'>
                <div className='container'>
                    <div className="footer-topbar">
                        <div className="footer-logo">
                            <img src={logo} alt="footer-logo" />
                        </div>
                        <ul className="social-links">
                            <li>
                                <a href="#0" className="platform">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="platform">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="platform">
                                    <i className="fab fa-behance" />
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="platform">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterTopBar