import React from "react";
import "./HeroImgStyle.css";
import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { RESUME_URL } from "../../utils/config";
import Typewriter from "typewriter-effect";
import img from "../../assets/hero-img.jpg";

function HeroImg() {
  const Roles = [
    "Full Stack Developer",
    "Mern Stack Developer",
    "Python Developer",
    "Programmer",
  ];
  const HeroBg = {
    position: "absolute",
    display: "flex",
    justifyContent: "end",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    maxWidth: "1360px",
    overflow: "hidden",
    padding: "0 30px",
    top: " 50%",
    left: "50%",
    webkitTransform: "translateX(-50%) translateY(-50%)",
    transform: " translateX(-50%) translateY(-50%)",

    // @media (max-width: 960px) {
    //   justify-content: center;
    //   padding: 0 0px;
    // }
  }

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
          <img src={img} alt="" style={{ zIndex: "10" }} />
          {/* <div style={HeroBg}>
            <HeroBgAnimation />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
