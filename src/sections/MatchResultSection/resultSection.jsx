import { football, footballRed, kick } from "../../assets/images";

const ResultSection = () => {
  return (
    <>
      {/*================= Result Section Start Here =================*/}
      <div className="rts-match-results-section section-gap">
        <div className="container">
          <div className="section-title-area section-title-area-inner mb--50">
            <h1 className="section-title">MATCH RESULTS</h1>
          </div>
          <div className="section-inner">
            <div className="table-area table-full">
              <table className="table table-bordered">
                <thead className="thead-dark"></thead>
                <tbody>
                  <tr className="head-tr">
                    <th scope="col">CLUB NAME</th>
                    <th scope="col">1ST HALF</th>
                    <th scope="col">2ND HALF</th>
                    <th scope="col">PTS</th>
                  </tr>
                  <tr>
                    <td>
                      <span className="td name long-text">
                        Mecca of Gaming F.C.
                      </span>
                    </td>
                    <td className="compact-td">
                      <span className="td">02</span>
                    </td>
                    <td className="compact-td">
                      <span className="td">02</span>
                    </td>
                    <td className="compact-td">
                      <span className="td pts-count">03</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="td name long-text">
                        Romada Football Club
                      </span>
                    </td>
                    <td className="compact-td">
                      <span className="td">00</span>
                    </td>
                    <td className="compact-td">
                      <span className="td">00</span>
                    </td>
                    <td className="compact-td">
                      <span className="td pts-count">01</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="player-activity-area">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="club-single">
                    <h2 className="club-name">MANCHESTER UNITED</h2>
                    <div className="player-single">
                      <span className="player-number">02</span>
                      <div className="d-block">
                        <span className="player-name">A. BEKAR</span>
                        <span className="player-role">GOAL KEEPER</span>
                      </div>
                      <div className="player-score">
                        <div className="icon mr--10">
                          <img
                            src={football}
                            alt="football"
                          />
                        </div>
                        <div className="icon red">
                          <img
                            src={footballRed}
                            alt="football"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="player-single">
                      <span className="player-number">02</span>
                      <div className="d-block">
                        <span className="player-name">L. MARTIN</span>
                        <span className="player-role">DEFENDER</span>
                      </div>
                      <div className="player-score">
                        <div className="icon mr--10">
                          <img
                            src={football}
                            alt="football"
                          />
                        </div>
                        <div className="icon">
                          <img
                            src={kick}
                            alt="football"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="player-single">
                      <span className="player-number">02</span>
                      <div className="d-block">
                        <span className="player-name">VAN DIJK</span>
                        <span className="player-role">MID FIELDER</span>
                      </div>
                      <div className="player-score">
                        <div className="icon">
                          <img
                            src={football}
                            alt="football"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="club-single">
                    <h2 className="club-name">LIVERPOOL F.C.</h2>
                    <div className="player-single">
                      <span className="player-number">02</span>
                      <div className="d-block">
                        <span className="player-name">S. PEDRI</span>
                        <span className="player-role">DEFENDER</span>
                      </div>
                      <div className="player-score">
                        <span className="action-card ylw-card mr--10" />
                        <span className="action-card red-card" />
                      </div>
                    </div>
                    <div className="player-single">
                      <span className="player-number">02</span>
                      <div className="d-block">
                        <span className="player-name">M. BUFFON</span>
                        <span className="player-role">GOAL KEEPER</span>
                      </div>
                      <div className="player-score">
                        <span className="action-card ylw-card mr--10" />
                        <div className="icon">
                          <img
                            src={kick}
                            alt="football"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="player-single">
                      <span className="player-number">02</span>
                      <div className="d-block">
                        <span className="player-name">L. GIROUND</span>
                        <span className="player-role">FORWARD</span>
                      </div>
                      <div className="player-score">
                        <div className="icon mr--10">
                          <img
                            src={football}
                            alt="football"
                          />
                        </div>
                        <span className="action-card red-card" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Result Section End Here =================*/}
    </>
  );
};

export default ResultSection;
