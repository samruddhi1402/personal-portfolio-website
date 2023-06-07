import { Link } from "react-router-dom";
import "../Aboutpage/AboutContentStyles.css";
import react1 from "../../assets/react1.jpg";
import react2 from "../../assets/react2.webp";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I'm react front-end developer. I create responsive secure websites
        </p>
        <Link to="/contact">
          <button className="btn">contact</button>
        </Link>
      </div>
      <div className="right">
        {/* <div className="img-container">
          <div className="img-stack top">
            <img src={react1} alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} alt="picture" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutContent;
