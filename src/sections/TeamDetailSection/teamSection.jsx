import { Link } from "react-router-dom";
import { team1, team2, team3, team4, team5, team6, team7, team8 } from "../../assets/images";
const TeamSection = () => {
  return (
    <>
      {/*================= Team Section Start Here =================*/}
      <div className="rts-team-section inner section-gap">
        <div className="container">
          <div className="team-section-inner inner">
            <div className="row">
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-wraper">
                  <div className="player-card">
                    <Link className="image" to="/teamDetails">
                      <img src={team1} alt="" />
                    </Link>
                    <div className="number">11</div>
                    <ul className="social-area">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile">
                    <p className="position">FORWARD</p>
                    <Link to="#" className="name">
                      MAXIELS DAVID
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-wraper">
                  <div className="player-card">
                    <Link className="image" to="/teamDetails">
                      <img src={team2} alt="" />
                    </Link>
                    <div className="number">7</div>
                    <ul className="social-area">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile">
                    <p className="position">WINGER</p>
                    <Link to="#" className="name">
                      VEN DIESEL
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-wraper">
                  <div className="player-card">
                    <Link className="image" to="/teamDetails">
                      <img src={team3} alt="" />
                    </Link>
                    <div className="number">9</div>
                    <ul className="social-area">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile">
                    <p className="position">WINGER</p>
                    <Link to="#" className="name">
                      NED STARK
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-wraper">
                  <div className="player-card">
                    <Link className="image" to="/teamDetails">
                      <img src={team4} alt="" />
                    </Link>
                    <div className="number">10</div>
                    <ul className="social-area">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile">
                    <p className="position">MID-FIELDER</p>
                    <Link to="/teamDetails" className="name">
                      JOHN WICK
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-wraper">
                  <div className="player-card">
                    <Link className="image" to="/teamDetails">
                      <img src={team5} alt="" />
                    </Link>
                    <div className="number">9</div>
                    <ul className="social-area">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile">
                    <p className="position">WINGER</p>
                    <Link to="/teamDetails" className="name">
                      TYRION LENNISTER
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-wraper">
                  <div className="player-card">
                    <Link className="image" to="/teamDetails">
                      <img src={team6} alt="" />
                    </Link>
                    <div className="number">10</div>
                    <ul className="social-area">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile">
                    <p className="position">MID-FIELDER</p>
                    <Link to="/teamDetails" className="name">
                      SAMWELL TARLY
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-wraper">
                  <div className="player-card">
                    <Link className="image" to="/teamDetails">
                      <img src={team7} alt="" />
                    </Link>
                    <div className="number">7</div>
                    <ul className="social-area">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile">
                    <p className="position">WINGER</p>
                    <Link to="/teamDetails" className="name">
                      EURON GREYJOY
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="team-wraper">
                  <div className="player-card">
                    <Link className="image" to="/teamDetails">
                      <img src={team8} alt="" />
                    </Link>
                    <div className="number">11</div>
                    <ul className="social-area">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile">
                    <p className="position">FORWARD</p>
                    <Link to="/teamDetails" className="name">
                      JOHN SNOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Team Section End Here =================*/}
    </>
  );
};

export default TeamSection;
