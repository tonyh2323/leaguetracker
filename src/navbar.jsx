import React from 'react';
import './Navbar.css';


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
        <li><a href="/">Home</a></li>
          <li><a href="./Players">Players</a></li>
          <li><a href="./Parents">Parents</a></li>
          <li><a href="./Coaches">Coaches</a></li>
          <li><a href="./About">About Us</a></li>
          <li><a href="./Contact">Contact</a></li>
          <li><a href="./Login">Login</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;