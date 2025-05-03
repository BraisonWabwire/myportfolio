import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Function to close menu on link click
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/projects" onClick={handleLinkClick}>
          Projects
        </Link>
        <Link to="/skills" onClick={handleLinkClick}>
          Skills
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
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
  );
}

export default Navbar;