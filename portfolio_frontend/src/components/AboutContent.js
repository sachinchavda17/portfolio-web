import { Link } from "react-router-dom";
import "../css/AboutContentStyle.css";
import React from "react";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
import AboutImg from "../assets/About-img.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react front-end developer. I create responsove secure websites
          for my clients.
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          {/* <div className="img-stack top"> */}
          <img src={AboutImg} alt="true" className="img" />
          {/* </div> */}
          {/* <div className="img-stack bottom">
                    <img src={React2} alt="true" className="img"/>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
