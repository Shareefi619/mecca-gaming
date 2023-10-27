
const LocationSection = () => {
  return (
    <>
      {/*================= Location Section Start Here =================*/}
      <div className="rts-location-section section-gap">
        <div className="container">
          <div className="top-wrap">
            <div className="section-title-area section-title-area-inner text-start mb--50">
              <h1 className="section-title">LOCATION GROUND</h1>
            </div>
            <a
              className="direction-btn btn"
              target="_blank"
              href="https://maps.google.com/maps/dir//ReacThemes+Ta+-118+3+Comilla+Para+Rd+Dhaka+1212/@23.7814027,90.4240433,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3755c7a4d4529a8f:0x3cc42b4e4b430164" rel="noreferrer"
            >
              GET DIRECTION <i className="far fa-long-arrow-right ml--5" />
            </a>
          </div>
          <div className="google-map-area">
            <div className="map">
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.0452483624595!2d90.424043!3d23.781403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3cc42b4e4b430164!2sReacThemes!5e0!3m2!1sen!2sbd!4v1656420500360!5m2!1sen!2sbd"
                  height={500}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*================= Location Section End Here =================*/}
    </>
  );
};

export default LocationSection;
