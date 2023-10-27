import { Link } from "react-router-dom";
import Preloader from "../components/preloader";

const Error = () => {
  return (
    <>
    <Preloader/>
      <div className="error-area">
        <div className="container">
          <div className="section-inner">
            <div className="page-title">
              <span className="text">4</span>
              <span className="text zero">0</span>
              <span className="text">4</span>
            </div>
            <div className="title">
              <h2 className="sub-title">Opps! Page not found</h2>
              <h3 className="sect-title">
                Sorry, we couldn&apos;t find the page you where looking for. We
                suggest that <br /> you return to homepage.
              </h3>
            </div>
            <div className="section-button">
              <Link to="/">
                <i className="fal fa-long-arrow-left" /> Go To Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
