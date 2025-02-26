import React from 'react';
import {  Link, Routes, Route, Router } from "react-router-dom";

import './Navbar.css';
import './App.css';

import Backgroundpic from './Background';
import Footer from './Footer';
import Players from './Players';
import Coaches from './Coaches';
import Parents from './Parents';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <nav className="navNew">
          <div className="navbar-left">
            <a href="/" className="logo">LeagueTracker</a>
          </div>
          <Link to="/">Home</Link>
          <Link to="/Players">Players</Link>
          <Link to="/Coaches">Coaches</Link>
          <Link to="/Parents">Parents</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
          <Link to="/Login">Login</Link>
          <Link to="/SignUp">SignUp</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Coaches" element={<Coaches />} />
          <Route path="/Parents" element={<Parents />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App