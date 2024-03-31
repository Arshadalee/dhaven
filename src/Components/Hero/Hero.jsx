import React from "react";
import "./hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import catDog from "../Assets/catDog.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
      
     <div>
     <div className="hero-hand-icon">
        <p>new </p>
        <img src={hand_icon} alt="" />
      </div>
     
      <p>products for pets</p>
      </div>
      
      <div className="hero-latest-btn">
        <div>latest items</div>
        <img src={arrow} alt="" />

      </div>
      </div>

      


        




      <div className="hero-right">
        <img className="heroImg" src={catDog} alt="" />
      </div>
    </div>
  );
};

export default Hero;
