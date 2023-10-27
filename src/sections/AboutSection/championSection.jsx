import { Link } from "react-router-dom";
import { player2, video1 } from "../../assets/images";
import { useState } from "react";
const ChampionSection = () => {
  const [activeFilter, setActiveFilter] = useState("yr90");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <>
      {/*================= Champions Section Start Here =================*/}
      <div className="rts-champion-section">
        <div className="player-image">
          <img src={player2} alt="" />
        </div>
        <div className="container">
          <div className="top-wrap">
          <div className="filter-button-group">
              <button
                className={`filter-btn ${activeFilter === "yr90" ? "active" : ""}`}
                onClick={() => handleFilterClick("yr90")}
              >
                1990
              </button>
              <button
                className={`filter-btn ${activeFilter === "yr10" ? "active" : ""}`}
                onClick={() => handleFilterClick("yr10")}
              >
                2010
              </button>
              <button
                className={`filter-btn ${activeFilter === "yr12" ? "active" : ""}`}
                onClick={() => handleFilterClick("yr12")}
              >
                2012
              </button>
              <button
                className={`filter-btn ${activeFilter === "yr15" ? "active" : ""}`}
                onClick={() => handleFilterClick("yr15")}
              >
                2015
              </button>
              <button
                className={`filter-btn ${activeFilter === "yr22" ? "active" : ""}`}
                onClick={() => handleFilterClick("yr22")}
              >
                2022
              </button>
            </div>
          </div>
          <div className="champion-details filterd-items yr90">
            <div className="contents">
              <h1 className="details-title">
                THE CHAMPIONS LEAGUE TROPHY SINCE 2010
              </h1>
              <p className="p1">
                It is one of the most popular football clubs that offer training
                programs for the youth, as well as summer camps. Play the
                fastest NFT based fantasy football manager earn coins, collect
                &amp; trade officially.
              </p>
              <p className="p2">
                Welcome to the official Chelsea FC website. Get all the latest
                news, videos &amp; ticket information as well as player
                profiles.
              </p>
            </div>
            <div className="details-video">
              <div className="video-thumb">
                <img src={video1} alt="video-thumb" />
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
          </div>
          <div className="champion-details filterd-items yr10 hide">
            <div className="contents">
              <h1 className="details-title">
                THE CHAMPIONS LEAGUE TROPHY 2010
              </h1>
              <p className="p1">
                It is one of the most popular football clubs that offer training
                programs for the youth, as well as summer camps. Play the
                fastest NFT based fantasy football manager earn coins, collect
                &amp; trade officially.
              </p>
              <p className="p2">
                Welcome to the official Chelsea FC website. Get all the latest
                news, videos &amp; ticket information as well as player
                profiles.
              </p>
            </div>
            <div className="details-video">
              <div className="video-thumb">
                <img src={video1} alt="video-thumb" />
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
          </div>
          <div className="champion-details filterd-items yr12 hide">
            <div className="contents">
              <h1 className="details-title">
                THE CHAMPIONS LEAGUE TROPHY 2010
              </h1>
              <p className="p1">
                It is one of the most popular football clubs that offer training
                programs for the youth, as well as summer camps. Play the
                fastest NFT based fantasy football manager earn coins, collect
                &amp; trade officially.
              </p>
              <p className="p2">
                Welcome to the official Chelsea FC website. Get all the latest
                news, videos &amp; ticket information as well as player
                profiles.
              </p>
            </div>
            <div className="details-video">
              <div className="video-thumb">
                <img src={video1} alt="video-thumb" />
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
          </div>
          <div className="champion-details filterd-items yr15 hide">
            <div className="contents">
              <h1 className="details-title">
                THE CHAMPIONS LEAGUE TROPHY 2010
              </h1>
              <p className="p1">
                It is one of the most popular football clubs that offer training
                programs for the youth, as well as summer camps. Play the
                fastest NFT based fantasy football manager earn coins, collect
                &amp; trade officially.
              </p>
              <p className="p2">
                Welcome to the official Chelsea FC website. Get all the latest
                news, videos &amp; ticket information as well as player
                profiles.
              </p>
            </div>
            <div className="details-video">
              <div className="video-thumb">
                <img src={video1} alt="video-thumb" />
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
          </div>
          <div className="champion-details filterd-items yr22 hide">
            <div className="contents">
              <h1 className="details-title">
                THE CHAMPIONS LEAGUE TROPHY 2010
              </h1>
              <p className="p1">
                It is one of the most popular football clubs that offer training
                programs for the youth, as well as summer camps. Play the
                fastest NFT based fantasy football manager earn coins, collect
                &amp; trade officially.
              </p>
              <p className="p2">
                Welcome to the official Chelsea FC website. Get all the latest
                news, videos &amp; ticket information as well as player
                profiles.
              </p>
            </div>
            <div className="details-video">
              <div className="video-thumb">
                <img src={video1} alt="video-thumb" />
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
          </div>
        </div>
      </div>
      {/*================= Champions Section End Here =================*/}
    </>
  );
};

export default ChampionSection;
