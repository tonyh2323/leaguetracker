import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import './Navbar.css';
import Navbar from './navbar';
import About from './About';
import Players from './Players';
import Coaches from './Coaches';
import Parents from './Parents';
import Contact from './Contact';
import Login from "./Login";
import SignUp from "./SignUp";
import Backgroundpic from './background';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <>
    <nav className="navbar">
    <Router>
        <div className="navbar-left">
          <a href="/" className="logo">LeagueTracker</a>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
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
    <Backgroundpic />
    <Footer />
    </>

  )
}

export default App
