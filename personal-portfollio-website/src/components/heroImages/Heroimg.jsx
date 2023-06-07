import "../heroImages/Heroimgstyles.css";

import React from "react";

import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro" />
      </div>

      <div className="content">
        <p>I'M A PASSIONATE DEVELOPER</p>
        <h1>REACT DEVELOPER</h1>
        <Link to="/project" className="btn">
          project
        </Link>
        <Link to="/contact" className="btn btn-light">
          contact
        </Link>
      </div>
    </div>
  );
};

export default Heroimg;
