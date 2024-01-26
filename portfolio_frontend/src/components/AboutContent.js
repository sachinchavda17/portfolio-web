import { Link } from "react-router-dom";
import "../css/AboutContentStyle.css";
import React from "react";
import AboutImg from "../assets/About-img.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react front-end and back-end developer. I create responsive
          secure websites for my clients.
        </p>
        <p>
          I have knowledge of React.js, Node.js, Express.js, MongoDb, MySQL, C,
          Python, Django.
        </p>

        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <img src={AboutImg} alt="true" className="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
