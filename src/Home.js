import React from "react";
import Hero from "./components/Hero/Hero";
import logo from "./assets/logo.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <img className="logo" src={logo} alt="" />
      </div>
      <Hero />
    </div>
  );
}

export default Home;
