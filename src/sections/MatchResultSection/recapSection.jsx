import { recap, logo1, logo2 } from "../../assets/images";

const RecapSection = () => {
  return (
    <>
      {/*================= Recap Section Start Here =================*/}
      <div className="rts-match-recap-section section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="recap-picture">
              <img src={recap} alt="recap-picture" />
            </div>
            <div className="contents">
              <h1 className="section-title">
                UNITED FC <span>VS</span> MAGNETIC TM
              </h1>
              <p className="p1">
                It is one of the most popular football clubs that offer training
                programs for the youth, as well as summer camps. Play the
                fastest NFT based fantasy football manager earn coins, collect
                &amp; trade officially.
              </p>
              <div className="match-result">
                <div className="header">
                  <div className="date">DECEMBER 25, 2022 (4.00PM)</div>
                  <div className="full-time">(FULLTIME)</div>
                </div>
                <div className="scoreboard">
                  <div className="team-logo">
                    <div className="logo">
                      <img src={logo1} alt="" />
                    </div>
                    <span>VS</span>
                    <div className="logo">
                      <img src={logo2} alt="" />
                    </div>
                  </div>
                  <h3 className="score">3 - 2</h3>
                </div>
              </div>
              <a href="#" className="highlight-btn">
                WATCH HIGHLIGHT <i className="fab fa-discord" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*================= Recap Section End Here =================*/}
    </>
  );
};

export default RecapSection;
