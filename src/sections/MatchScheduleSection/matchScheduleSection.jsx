import {
  club1,
  club3,
  club6,
  club4,
  club5,
  club7,
  club8,
  club9,
  club10,
  club11,
  club12,
  club13,
  club14,
  club15,
  club16,
  club17,
} from "../../assets/images";
import ScrollToTop from "../../components/scrollToTop";
import { Link } from "react-router-dom";
const MatchScheduleSection = () => {
  return (
    <>
      {/*================= Match Result Section Start Here =================*/}
      <div className="rts-match-result-section rts-match-result-section2 rts-match-schedule-section inner section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="match-single">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">REAL SOCCER</span>
                        <img src={club1} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">VS</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club6} alt="club-logo" />
                        <span className="club-name">HEMILTON FC</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
                <div className="match-bottom-action">
                  <Link to="/shop" className="action-item first-child">
                    GET TICKETS
                  </Link>
                  <div className="play-video">
                    <Link
                      to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                      className="action-item popup-video"
                    >
                      WATCH STREAM
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="match-single sm">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">VALENCIA</span>
                        <img src={club3} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">VS</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club4} alt="club-logo" />
                        <span className="club-name">BRIGHTON</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="match-single sm">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">REAL BETIS</span>
                        <img src={club4} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">VS</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club5} alt="club-logo" />
                        <span className="club-name">HEMILTON FC</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="match-single sm">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">ASTON VILLA</span>
                        <img src={club6} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">VS</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club7} alt="club-logo" />
                        <span className="club-name">MAN UTD.</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="match-single sm">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">LIVERPOOL</span>
                        <img src={club8} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">VS</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club9} alt="club-logo" />
                        <span className="club-name">MAN CITY</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="match-single sm">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">DORTMUND</span>
                        <img src={club10} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">VS</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club11} alt="club-logo" />
                        <span className="club-name">AC MILAN</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="match-single sm">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">INTER MILAN</span>
                        <img src={club12} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">VS</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club13} alt="club-logo" />
                        <span className="club-name">BENFICA</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="match-single sm">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">BOCA JUNIORS</span>
                        <img src={club14} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">VS</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club15} alt="club-logo" />
                        <span className="club-name">ATHELETIC VILVAO</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="match-single sm">
                <div className="match-single-content">
                  <div className="match-scores">
                    <div className="club club1">
                      <div className="club-logo mr--20">
                        <span className="club-name">GRANDA</span>
                        <img src={club16} alt="club-logo" />
                      </div>
                    </div>
                    <div className="colon">Vs</div>
                    <div className="club club2">
                      <div className="club-logo ml--20">
                        <img src={club17} alt="club-logo" />
                        <span className="club-name">ARSENAL</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap">
                    <span className="match-date">JULY 21, 2023</span>
                    <span className="stadium-name">MC ARMY STADIUM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop/>
      {/*================= Match Result Section End Here =================*/}
    </>
  );
};

export default MatchScheduleSection;
