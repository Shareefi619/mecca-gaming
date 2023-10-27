import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';

const MatchResult = () => {

  return (
    <>
      {/*================= Match Result Start Here =================*/}
      <div className="rts-match-result-section">
        <div className="row">
          <div className="swiper rts-sixSlide-over">
            <Swiper
              spaceBetween={30}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={5} // Set the number of slides per view
              modules={[Autoplay]}
              className="mySwiper"
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="swiper-slide col-item">
                    <div className="match-single">
                      <span className="match-date">PLAYOFF, JULY 21</span>
                      <div className="match-scores">
                        <div className="club">
                          <h2 className="score-number">01</h2>
                          <span className="club-name">REAL M.</span>
                        </div>
                        <div className="colon">:</div>
                        <div className="club">
                          <h2 className="score-number">03</h2>
                          <span className="club-name">HEMILTON H.</span>
                        </div>
                      </div>
                      <div className="match-review">
                        <Link to="/newsDetails" className="review-link smry">
                          SAMMARY
                        </Link>
                        <div className="play-btn play-video">
                          <Link
                            to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                            className="review-link vdo"
                          >
                            VIDEO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide col-item">
                    <div className="match-single">
                      <span className="match-date">PLAYOFF, JULY 21</span>
                      <div className="match-scores">
                        <div className="club">
                          <h2 className="score-number">01</h2>
                          <span className="club-name">REAL M.</span>
                        </div>
                        <div className="colon">:</div>
                        <div className="club">
                          <h2 className="score-number">03</h2>
                          <span className="club-name">HEMILTON H.</span>
                        </div>
                      </div>
                      <div className="match-review">
                        <Link to="/newsDetails" className="review-link smry">
                          SAMMARY
                        </Link>
                        <div className="play-btn play-video">
                          <Link
                            to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                            className="review-link vdo"
                          >
                            VIDEO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide col-item">
                    <div className="match-single">
                      <span className="match-date">PLAYOFF, JULY 21</span>
                      <div className="match-scores">
                        <div className="club">
                          <h2 className="score-number">01</h2>
                          <span className="club-name">REAL M.</span>
                        </div>
                        <div className="colon">:</div>
                        <div className="club">
                          <h2 className="score-number">03</h2>
                          <span className="club-name">HEMILTON H.</span>
                        </div>
                      </div>
                      <div className="match-review">
                        <Link to="/newsDetails" className="review-link smry">
                          SAMMARY
                        </Link>
                        <div className="play-btn play-video">
                          <Link
                            to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                            className="review-link vdo"
                          >
                            VIDEO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide col-item">
                    <div className="match-single">
                      <span className="match-date">PLAYOFF, JULY 21</span>
                      <div className="match-scores">
                        <div className="club">
                          <h2 className="score-number">01</h2>
                          <span className="club-name">REAL M.</span>
                        </div>
                        <div className="colon">:</div>
                        <div className="club">
                          <h2 className="score-number">03</h2>
                          <span className="club-name">HEMILTON H.</span>
                        </div>
                      </div>
                      <div className="match-review">
                        <Link to="/newsDetails" className="review-link smry">
                          SAMMARY
                        </Link>
                        <div className="play-btn play-video">
                          <Link
                            to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                            className="review-link vdo"
                          >
                            VIDEO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide col-item">
                    <div className="match-single">
                      <span className="match-date">PLAYOFF, JULY 21</span>
                      <div className="match-scores">
                        <div className="club">
                          <h2 className="score-number">01</h2>
                          <span className="club-name">REAL M.</span>
                        </div>
                        <div className="colon">:</div>
                        <div className="club">
                          <h2 className="score-number">03</h2>
                          <span className="club-name">HEMILTON H.</span>
                        </div>
                      </div>
                      <div className="match-review">
                        <Link to="/newsDetails" className="review-link smry">
                          SAMMARY
                        </Link>
                        <div className="play-btn play-video">
                          <Link
                            to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                            className="review-link vdo"
                          >
                            VIDEO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide col-item">
                    <div className="match-single">
                      <span className="match-date">PLAYOFF, JULY 21</span>
                      <div className="match-scores">
                        <div className="club">
                          <h2 className="score-number">01</h2>
                          <span className="club-name">REAL M.</span>
                        </div>
                        <div className="colon">:</div>
                        <div className="club">
                          <h2 className="score-number">03</h2>
                          <span className="club-name">HEMILTON H.</span>
                        </div>
                      </div>
                      <div className="match-review">
                        <Link to="/newsDetails" className="review-link smry">
                          SAMMARY
                        </Link>
                        <div className="play-btn play-video">
                          <Link
                            to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                            className="review-link vdo"
                          >
                            VIDEO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      {/*================= Match Result Section End Here =================*/}
    </>

  );
};


export default MatchResult;
