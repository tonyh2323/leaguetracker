import React from 'react';
import './Navbar.css';
import About from './About';
import Players from './Players';
import Coaches from './Coaches';
import Parents from './Parents';
import Contact from './Contact';
import Login from "./Login";
import SignUp from "./SignUp";


import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">LeagueTracker</a>
      </div>
      <Router>  
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Coaches" element={<Coaches />}/>
          <Route path="/Parents" element={<Parents />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </Router>
    </nav>
  );
};





export default Navbar;