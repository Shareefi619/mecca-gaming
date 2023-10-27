import { award1, award2, award3, award4 } from "../../assets/images";

const Award = () => {
  return (
    <>
      {/*================= Awards Section Start Here =================*/}
      <div className="rts-awards-section section-gap">
        <div className="container">
          <div className="section-title-area section-title-area1 text-center mb--50">
            <span className="pretitle">TROPHY</span>
            <h1 className="section-title">OUR AWARDS</h1>
            <p>
              It is one of the most popular football clubs that offer training
              programs for the youth, as well as summer camps
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="award-box">
                <div className="award-picture">
                  <img src={award1} alt="award-picture" />
                </div>
                <div className="content">
                  <span className="award-title">SEASON 2015</span>
                  <p>FINAL TOUR</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="award-box">
                <div className="award-picture">
                  <img src={award2} alt="award-picture" />
                </div>
                <div className="content">
                  <span className="award-title">SEASON 2019</span>
                  <p>FINAL TOUR</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="award-box">
                <div className="award-picture">
                  <img src={award3} alt="award-picture" />
                </div>
                <div className="content">
                  <span className="award-title">SEASON 2020</span>
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
                  <span className="award-title">SEASON 2023</span>
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

export default Award;
