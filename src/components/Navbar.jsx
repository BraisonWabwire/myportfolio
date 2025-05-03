import React from 'react'
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Navbar() {

    const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Navbar