import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Hack Karnataka
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#sponsors" className="nav-links">
              Sponsors
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-links">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="#register" className="nav-links-btn">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;