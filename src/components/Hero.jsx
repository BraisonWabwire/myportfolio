import React from 'react';
import './Hero.css'; // Import the CSS file for styling

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Braison Wabwire</span></h1>
        <p>A passionate software developer crafting beautiful & responsive web and mobile applications.</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
