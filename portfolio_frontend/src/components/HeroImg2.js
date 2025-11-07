import "../css/HeroImg2Style.css";
import React from "react";

function HeroImg2({ heading, text, img }) {
  const heroStyle = img ? { 
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <div className="hero-img" style={heroStyle}>
      <div className="heading">
        <h1>{heading}</h1>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

export default HeroImg2;
