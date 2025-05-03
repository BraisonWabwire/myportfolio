import React from 'react';
import './About.css'; // Import the CSS file for styling
import myProfile from '../assets/profile.jpg'; // Import your profile image


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src={myProfile} // Replace with your image URL
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="about-text">
            <p>
              Hi, I'm Braison Wabwire, a passionate software developer with a love for creating
              innovative and user-friendly solutions. With a strong foundation in  React, JavaScript, UI/UX design,python django, Machine Learning, R programming. I strive to build projects that make a difference.
            </p>
            <p>
              My journey in tech began in 2021 when I joined Maseno University as a computer Science student. Since then, I've worked on projects involving dynamic web apps, freelance projects, and open-source contributions. I thrive on challenges and am always eager to learn new technologies.
            </p>
            <p>
              When I'm not coding, you can find me listening to music or scrolling on X, I also love basketball . Let's connect and create something amazing together!
            </p>
            <a href="#contact" className="cta-button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;