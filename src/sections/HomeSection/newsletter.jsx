import React from 'react'
import { player3, shape } from '../../assets/images'

const Newsletter = () => {
    return (
        <div className="rts-newsletter-section">
            <div className="container">
                <div className="newsletter-inner">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="newsletter-box">
                                <div className="shape">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="section-title-area section-title-area1 text-start mb--50">
                                    <h1 className="section-title">SUBSCRIBE NEWSLETTER</h1>
                                    <p>Empus justo tortor nunc ullamcorper curabitur ultrices duis cum lobortis Montes
                                        facilisi vitae litora non dis at class</p>
                                </div>
                                <form>
                                    <div className="form">
                                        <input type="text" className="form-control" id="username" placeholder="Enter Your Email"
                                            required />
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn">SUBSCRIBE <i
                                            className="fal fa-long-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-image">
                                <img src={player3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter