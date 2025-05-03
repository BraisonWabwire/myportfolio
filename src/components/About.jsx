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
              Hi, I'm [Your Name], a passionate [your profession, e.g., Web Developer/Designer] with a love for creating
              innovative and user-friendly solutions. With a strong foundation in [list key skills, e.g., React, JavaScript, UI/UX design], I strive to build projects that make a difference.
            </p>
            <p>
              My journey in [your field] began [brief background, e.g., X years ago when I started coding]. Since then, I've worked on [mention types of projects or experiences, e.g., dynamic web apps, freelance projects, or open-source contributions]. I thrive on challenges and am always eager to learn new technologies.
            </p>
            <p>
              When I'm not coding, you can find me [personal interests, e.g., hiking, reading, or experimenting with new recipes]. Let's connect and create something amazing together!
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