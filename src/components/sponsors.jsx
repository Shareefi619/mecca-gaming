import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import PropTypes from 'prop-types';

const Sponsors = ({ sponsorImages }) => {
  useEffect(() => {
    // Initialize the Swiper slider when the component mounts
    const swiper = new Swiper(".rts-brandSlider", {
      slidesPerView: 6, // Display all 6 images at once
      spaceBetween: 30,
      loop: true, // Enable looping
      autoplay: {
        delay: 3000,
      },
    });
  }, []);

  return (
    <div className="rts-sponsors-section section-gap">
      <div className="container">
        <div className="section-title-area section-title-area1 text-center mb--50">
          <span className="pretitle">SPONSOR</span>
          <h1 className="section-title">HAPPY SPONSORS</h1>
          <p>
            It is one of the most popular football clubs that offer training
            programs for the youth, as well as summer camps.
          </p>
        </div>
        <div className="sponsors-section-inner">
          <div className="swiper rts-brandSlider">
            <div className="swiper-wrapper">
              {sponsorImages.map((image, index) => (
                <div className="swiper-slide" key={index}>
                  <a href="#" className="sponsor-single">
                    <div className="sponsors-logo">
                      <img src={image} alt="sponsor" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sponsors.propTypes = {
  sponsorImages: PropTypes.array.isRequired,
};

export default Sponsors;
