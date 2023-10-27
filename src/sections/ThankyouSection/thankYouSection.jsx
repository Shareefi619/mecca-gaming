import React from 'react'
import { Link } from 'react-router-dom'

const ThankYouSection = () => {
  return (
    <>
  {/*thanks-area start*/}
  <div className="thanks-area">
    <div className="container">
      <div className="section-inner">
        <div className="section-icon">
          <i className="fal fa-check" />
        </div>
        <div className="section-title">
          <h2 className="sub-title">Thanks For your Order</h2>
          <h3 className="sect-title">
            Sorry, we couldn't find the page you where looking for. We suggest
            that <br />
            you return to homepage.
          </h3>
        </div>
        <div className="section-button">
          <Link className="btn-1" to="/">
            <i className="fal fa-long-arrow-left" /> Go To Homepage
          </Link>
          <h3>
            Let's track your order or
            <Link className="btn-2" to="/contactUs">
              {" "}
              Contact Us
            </Link>
          </h3>
        </div>
      </div>
    </div>
  </div>
  {/*thanks-area end*/}
</>

  )
}

export default ThankYouSection