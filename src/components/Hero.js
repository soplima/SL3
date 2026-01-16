import React from "react";
import heroImage from "../assets/hero.jpg"; 
const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
      </div>
    </section>
  );
};

export default Hero;
