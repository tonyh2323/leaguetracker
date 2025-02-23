import React from 'react';
import './Navbar.css';
import About from './About';
import Players from './Players';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          LeagueTracker
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="./Players">Players</a></li>
          <li><a href="./Players">Parents</a></li>
          <li><a href="./Players">Coaches</a></li>
          <li><a href="./About">About Us</a></li>
          <li><a href="./Players">Contact</a></li>
          <li><a href="./Players">Login</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;