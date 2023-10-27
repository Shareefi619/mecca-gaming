import { Link } from "react-router-dom";
import {
  financial,
  arg,
  physician,
  ita,
  coach,
  por,
} from "../../assets/images";
const TeamDetail = () => {
  return (
    <>
      {/*================= Team Details Section Start Here =================*/}
      <div className="rts-team-member-details">
        <div className="container">
          <div className="team-details-single">
            <h3 className="title">COACH JOSE MOURIN</h3>
            <div className="row">
              <div className="col-lg-3">
                <div className="team-picture">
                  <img src={financial} alt="playerspic" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="team-status-area">
                  <div className="status-box">
                    <div className="status-item">
                      <span className="status-name">NATIONALITY:</span>
                      <span className="status-number">
                        <img src={arg} alt="" /> ARGENTINA
                      </span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">CURRENT TEAM:</span>
                      <Link to="/" className="status-number club">
                        Mecca of Gaming
                      </Link>
                    </div>
                    <div className="status-item">
                      <span className="status-name">PAST TEAM</span>
                      <span className="status-number">INTER MILAN</span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">AGE</span>
                      <span className="status-number">45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-details-single">
            <h3 className="title">PHYSICIAN SAM FOSTER</h3>
            <div className="row">
              <div className="col-lg-3">
                <div className="team-picture">
                  <img src={physician} alt="playerspic" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="team-status-area">
                  <div className="status-box">
                    <div className="status-item">
                      <span className="status-name">NATIONALITY:</span>
                      <span className="status-number">
                        <img src={ita} alt="" /> ITALY
                      </span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">CURRENT TEAM:</span>
                      <Link to="/" className="status-number club">
                        Mecca of Gaming
                      </Link>
                    </div>
                    <div className="status-item">
                      <span className="status-name">PAST TEAM</span>
                      <span className="status-number">ASTON VILLA</span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">AGE</span>
                      <span className="status-number">45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-details-single">
            <h3 className="title">FINANCIAL ADVISOR STEPHEN CORR</h3>
            <div className="row">
              <div className="col-lg-3">
                <div className="team-picture">
                  <img src={coach} alt="playerspic" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="team-status-area">
                  <div className="status-box">
                    <div className="status-item">
                      <span className="status-name">NATIONALITY:</span>
                      <span className="status-number">
                        <img src={por} alt="" /> PORTUGAL
                      </span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">CURRENT TEAM:</span>
                      <Link to="/" className="status-number club">
                        Mecca of Gaming
                      </Link>
                    </div>
                    <div className="status-item">
                      <span className="status-name">PAST TEAM</span>
                      <span className="status-number">ATLANTA</span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">AGE</span>
                      <span className="status-number">45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Team Details Section End Here =================*/}
    </>
  );
};

export default TeamDetail;
