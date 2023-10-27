import { Link } from "react-router-dom";
import { overview, fs2, fs1 } from "../../assets/images";

const EventDetailSection = () => {
  return (
    <>
      {/*================= Team Details Section Start Here =================*/}
      <div className="rts-event-details-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="event-overview event-info-part">
                <div className="overview-image">
                  <img
                    src={overview}
                    alt="overview-image"
                  />
                  <div className="event-date-floating">
                    <span className="day">20</span>
                    <span className="month">JANUARY</span>
                    <span className="year">2023</span>
                  </div>
                </div>
                <h2 className="event-info-title">EVENT OVERVIEW</h2>
                <div className="contents">
                  <p className="p1">
                    What makes Thomas Tuchel tick? The will to win, of course.
                    His love of football. A constant desire to improve and
                    innovate. But our boss always knows of being able to unwind,
                    so that’s why we have a at Chelsea. Meet Lars, our C R O. A
                    firm believer in the power and art of relaxation, Lars is
                    tasked with bringing smiles to the Chelsea players’ faces,
                    lifting their moods and even, in some cases, booking their
                    family holidays.
                  </p>
                  <p>
                    Earlier this year, official Chelsea Football Club partner
                    trivago supported the Chelsea Foundation and its female
                    participants in the Goal Getters programme, promoting
                    positive female role models under the theme of allyship.
                  </p>
                </div>
              </div>
              <div className="event-location event-info-part">
                <h2 className="event-info-title">LOCATION</h2>
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
              <div className="event-facilities event-info-part">
                <h2 className="event-info-title">FACILITIES</h2>
                <p className="p1">
                  The Foundation’s Goal Getters platform is a female-targeted
                  programme delivered across secondary schools in the UK and
                  aims to inspire and empower young women to set new goals,
                  embed positive values and connect with other young females.
                </p>
                <div className="facilities-picture-area">
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div className="picture">
                        <img src={fs1} alt="fs-pic" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="picture">
                        <img src={fs2} alt="fs-pic" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="event-side-info">
                <div className="info-box">
                  <div className="info-top">
                    <span className="info-title">ORGANIZER</span>
                  </div>
                  <div className="info-body">
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-user" />
                      </div>
                      <span className="q-span">Name:</span>
                      <span className="a-span">Mike Dawson</span>
                    </div>
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-phone" />
                      </div>
                      <span className="q-span">Phone:</span>
                      <Link to="tel:1234567" className="a-span">
                        8 (800) 123-45-67
                      </Link>
                    </div>
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-envelope-open" />
                      </div>
                      <span className="q-span">Email:</span>
                      <Link to="mailto:info@example.com" className="a-span">
                        info@example.com
                      </Link>
                    </div>
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-globe" />
                      </div>
                      <span className="q-span">Website:</span>
                      <Link to="http://reactheme.com/" className="a-span">
                        www.webmail.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info-box">
                  <div className="info-top">
                    <span className="info-title">TIME &amp; DATE</span>
                  </div>
                  <div className="info-body">
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-clock" />
                      </div>
                      <span className="q-span">Start:</span>
                      <span className="a-span">10:00 AM</span>
                    </div>
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-clock" />
                      </div>
                      <span className="q-span">Break:</span>
                      <span className="a-span">8 (800) 123-45-67</span>
                    </div>
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-clock" />
                      </div>
                      <span className="q-span">End:</span>
                      <span className="a-span">02:00PM</span>
                    </div>
                  </div>
                </div>
                <div className="info-box">
                  <div className="info-top">
                    <span className="info-title">VENUE</span>
                  </div>
                  <div className="info-body">
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-home" />
                      </div>
                      <span className="a-span">Donald Stadium</span>
                    </div>
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-map" />
                      </div>
                      <span className="a-span">350 5th Ave, New York</span>
                    </div>
                    <div className="info-item">
                      <div className="icon">
                        <i className="far fa-map-marker-alt" />
                      </div>
                      <span className="a-span">United States</span>
                    </div>
                  </div>
                </div>
                <Link to="#" className="side-action-btn book-seat-btn">
                  BOOK YOUR SEAT
                </Link>
                <Link to="#" className="side-action-btn add-cal-btn">
                  ADD TO CALANDER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Team Details Section Start Here =================*/}
    </>
  );
};

export default EventDetailSection;
