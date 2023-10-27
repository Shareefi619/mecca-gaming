import { Link } from "react-router-dom";
import { insgt } from "../../assets/images";

const InsightSection = () => {
  return (
    <>
      {/*================= INSIGHTS Section Start Here =================*/}
      <div className="rts-match-insights-section section-gap">
        <div className="container">
          <div className="section-title-area section-title-area-inner mb--50">
            <h1 className="section-title">MATCH INSIGHTS</h1>
          </div>
          <div className="section-inner">
            <div className="match-video">
              <div className="video-thumb">
                <img src={insgt} alt="video-thumb" />
                <div className="play-btn play-video">
                  <Link
                    className="popup-video"
                    to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                    data-effect="mfp-move-horizontal"
                  >
                    <i className="fas fa-play" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="table-area table-full">
              <table className="table table-bordered">
                <thead className="thead-dark"></thead>
                <tbody>
                  <tr className="head-tr inner">
                    <th scope="col">DATE</th>
                    <th scope="col">TIME</th>
                    <th scope="col">LEAGUE</th>
                    <th scope="col">SEASON</th>
                    <th scope="col">MATCH DAY</th>
                    <th scope="col">FULL TIME</th>
                  </tr>
                  <tr>
                    <td>
                      <span className="text">May 11, 2022</span>
                    </td>
                    <td>
                      <span className="text">1:41 pm</span>
                    </td>
                    <td>
                      <span className="long-text">Premier League</span>
                    </td>
                    <td>
                      <span className="numberic">2018</span>
                    </td>
                    <td>
                      <span className="long-text">
                        15:00 Sat 11th July 2018
                      </span>
                    </td>
                    <td>
                      <span className="pts-count">90’</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/*================= INSIGHTS Section End Here =================*/}
    </>
  );
};

export default InsightSection;
