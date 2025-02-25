import React from 'react';
import './Navbar.css';


import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">LeagueTracker</a>
      </div>
    </nav>
  );
};





export default Navbar;