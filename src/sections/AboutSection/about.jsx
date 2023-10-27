import { Link } from "react-router-dom";
import { img4,img5 } from "../../assets/images";
const About = () => {
  return (
    <>
      {/*================= About Section Start Here =================*/}
      <div className="rts-about-section  about section-gap">
        <div className="container">
          <div className="about-inner">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12">
                <div className="about-thumb">
                  <div className="img1">
                    <img
                      src={img4}
                      alt="about-thumb"
                    />
                  </div>
                  <div className="img2">
                    <img
                      src={img5}
                      alt="about-thumb"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="contents">
                  <div className="section-title-area section-title-area1 text-start">
                    <h1 className="section-title">
                      <span>ABOUT </span> <br /> Mecca of Gaming
                    </h1>
                    <p>
                      Mecca of Gaming is a trailblazing sports entertainment
                      platform that is set to disrupt the gaming industry with
                      its comprehensive and unique offerings. Our platform is a
                      one-stop hub that integrates sports betting, casino games,
                      live sports streaming, memorabilia, merchandising, ticket
                      sales, pools, a rewards card system, banking services, and
                      more. Additionally, we offer cash back incentives
                      specificall for our sportsbook and betting services. This
                      all-encompassing approach, coupled with our physical
                      nightlife locations, is revolutionizing the sports
                      entertainment landscape.
                    </p>
                  </div>
                  <ul>
                    <li className="player">
                      <p className="sub">MANAGER</p>
                      <h3 className="title">PRO 05</h3>
                    </li>
                    <li className="player">
                      <p className="sub">PLAYERS</p>
                      <h3 className="title">PRO 107</h3>
                    </li>
                    <li className="player">
                      <p className="sub">COACH</p>
                      <h3 className="title">PRO 19</h3>
                    </li>
                  </ul>
                  <Link to="/teamDetails" className="more-btn">
                    OUR TEAM <i className="fal fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= About Section End Here =================*/}
    </>
  );
};

export default About;
