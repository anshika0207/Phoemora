// This component is used to render Home page.
import "./index.css";
import { useEffect } from "react";
// import Cookies from "js-cookie";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

//This function is used to render the main cards in home.
const renderCards = () => {
  // const jwtToken = Cookies.get("jwt_token");
  return (
    <>
      <div className="home-container">
        {
          // post job card
        }
        <div
          className="home-post-job-card"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <div className="home-post-job-card-text">
            <h1 className="home-post-job-card-heading">
              Fill a sample form and start your hassle-free recruitment journey
              now!
            </h1>
            <Link to="/userform">
              <button type="button" className="home-page-card-button">
                Apply Job
              </button>
            </Link>
          </div>
        </div>
        {
          // post rdsume card
        }
      </div>
    </>
  );
};

// Rendering the whole home page
const Home = () => {
  useEffect(() => {
    AOS.init(); // used for transitions in the home page.
  });
  return <>{renderCards()}</>;
};

export default Home;
