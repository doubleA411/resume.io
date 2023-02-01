import React from "react";
import "./Hero.css";
import hero1 from "../../assets/hero1.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        Build Your
        <span>
          <b>Resume</b> in a
        </span>
        <span>
          <b>Minute.</b>
        </span>
      </div>
      <Link to="/builder">
        <div className="hero-btn">Let's Build</div>
      </Link>
      <div className="hero-circle">
        <div className="left">
          <div className="hero3"></div>
          <div className="hero2"></div>
          <div className="hero1"></div>
        </div>
        {/* <div className="right">
          <div className="hero4"></div>
          <div className="hero5"></div>
          <div className="hero6"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
