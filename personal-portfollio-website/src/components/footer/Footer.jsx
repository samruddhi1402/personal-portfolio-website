import "./FooterStyles.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <a href="https://www.google.com/maps/place/18%C2%B029'01.2%22N+73%C2%B057'02.0%22E/@18.4836707,73.9483761,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.4836707!4d73.9505648?hl=en&entry=ttu">
              <FaHome
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <div>
              <p>Flat No 4 Amber heights </p>
              <p>Pune,Maharashtra</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>7843056802</p>
            <div></div>
          </div>
          <div className="email">
            <a href="https://mail.google.com">
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>

            <p>samruddhi1422000@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            This is Samruddhi , Frontend developer trainee at FunctionUp, I
            enjoy disscussing new projects and design challanges
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/samruddhi-kshirsagar-029062218">
              <FaLinkedinIn
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/SamruddhiK21864">
              <FaTwitter
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>

            <a href="https://github.com/samruddhi1402">
              <FaGithub
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
