import "../css/HeroImg2Style.css";
import React from "react";
function HeroImg2({ heading, text, img }) {
  return (
    // <div className="hero-img" style={{ background: `url(${img}) `, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
    <div className="hero-img" >
      <div className="heading">
        <h1>{heading} </h1>
        <p>{text} </p>
      </div>
    </div>
  );
}

export default HeroImg2;
