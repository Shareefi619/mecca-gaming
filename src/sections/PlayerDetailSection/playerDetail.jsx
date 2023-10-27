import { Link } from "react-router-dom";
import { team9, eng } from "../../assets/images";
const PlayerDetail = () => {
  return (
    <>
      {/*================= Player Details Section Start Here =================*/}
      <div className="rts-player-details-section rts-team-details-section section-gap section-bg">
        <div className="container">
          <div className="player-details-single">
            <div className="row">
              <div className="col-lg-4">
                <div className="player-picture">
                  <img src={team9} alt="playerspic" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="player-status-area">
                  <div className="status-box">
                    <div className="status-item">
                      <span className="status-name">NATIONALITY:</span>
                      <span className="status-number">
                        <img src={eng} alt="" /> ENGLAND
                      </span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">POSITION:</span>
                      <span className="status-number">FORWARD</span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">HEIGHT:</span>
                      <span className="status-number">78 INCHES</span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">WEIGHT:</span>
                      <span className="status-number">92kg</span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">CURRENT TEAM:</span>
                      <Link to="/" className="status-number club">
                        Mecca of Gaming
                      </Link>
                    </div>
                    <div className="status-item">
                      <span className="status-name">Games Played:</span>
                      <span className="status-number">300</span>
                    </div>
                    <div className="status-item">
                      <span className="status-name">SEASONS:</span>
                      <span className="status-number">2018, 2019, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contents">
            <h3 className="player-role">ABOUT</h3>
            <h2 className="player-name">AB ORKO JR</h2>
            <p>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed.
            </p>
            <p>
              Quia non numquam eius modi tempora incidunt, ut labore et dolore
              magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
              aliquid ex ea commodi consequatur? quis autem vel eum iure
              reprehenderit, qui in ea voluptate velit esse, nihil consequatur,
              vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
              Lorem ipsum dolor sit amet, consectetuer
            </p>
          </div>
        </div>
      </div>
      {/*================= Player Details Section End Here =================*/}
    </>
  );
};

export default PlayerDetail;
