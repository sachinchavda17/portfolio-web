import React from "react";
import "../css/HeroImgStyle.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { RESUME_URL } from "../utils/config";
import Typewriter from "typewriter-effect";
import img from "../assets/hero-img.jpg";
function HeroImg() {
  const Roles = [
    "Full Stack Developer",
    "Mern Stack Developer",
    "Python Developer",
    "Programmer",
  ];
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" className="into-img" />
      </div>
      <div className="content">
        <div className="left">
          <p>HI, I'M</p>
          <h1>SACHIN CHAVDA</h1>
          <div className="text-loop">
            I am a
            <span className="span">
              <Typewriter
                options={{
                  strings: Roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div>
            <Link to={`${RESUME_URL}`} className="btn" target="_blank">
              Resume
            </Link>
            <Link to={"/contact"} className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
