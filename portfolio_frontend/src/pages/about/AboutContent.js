import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from "react";
import AboutImg from "../../assets/About-img.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>
        {/* <p>
          Im a react front-end and back-end developer. I create responsive
          secure websites for my clients.
        </p> */}
        {/* <p>
          I have knowledge of React.js, Node.js, Express.js, MongoDb, MySQL, C,
          Python, Django.
        </p> */}

        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <img src={AboutImg} alt="true" className="img" />
          {/* <div className="img">
            CSS
          </div> */}
        </div>
      </div>
    </div>
    // <div className="body">
    //   <div className="box">
    //      <img src={AboutImg} alt="true"  />
    //   </div>
    // </div>
  );
};

export default AboutContent;
