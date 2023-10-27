import { award1, award2, award3, award4 } from "../../assets/images";
const AwardSection = () => {
  return (
    <>
      {/*================= Awards Section Start Here =================*/}
      <div className="rts-awards-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="award-box">
                <div className="award-picture">
                  <img
                    src={award1}
                    alt="award-picture"
                  />
                </div>
                <div className="content">
                  <span className="award-title">SEASON 2000</span>
                  <p>FINAL TOUR</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="award-box">
                <div className="award-picture">
                  <img
                    src={award2}
                    alt="award-picture"
                  />
                </div>
                <div className="content">
                  <span className="award-title">SEASON 2000</span>
                  <p>FINAL TOUR</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="award-box">
                <div className="award-picture">
                  <img
                    src={award3}
                    alt="award-picture"
                  />
                </div>
                <div className="content">
                  <span className="award-title">SEASON 2000</span>
                  <p>FINAL TOUR</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="award-box">
                <div className="award-picture">
                  <img
                    src={award4}
                    alt="award-picture"
                  />
                </div>
                <div className="content">
                  <span className="award-title">SEASON 2000</span>
                  <p>FINAL TOUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Awards Section End Here =================*/}
    </>
  );
};

export default AwardSection;
