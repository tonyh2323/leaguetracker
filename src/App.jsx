import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { useState } from 'react';
import './Navbar.css';
import './App.css';

import About from './About';
import Players from './Players';
import Coaches from './Coaches';
import Parents from './Parents';
import Contact from './Contact';
import Login from "./Login";
import SignUp from "./SignUp";
import Backgroundpic from './background';
import Footer from './Footer';
import Layout from './Layout.jsx';

function App() {
  return (
    <>
    <nav className="navbar">
    <Router>
        <div className="navbar-left">
          <a href="/" className="logo">LeagueTracker</a>
        </div>
    <Layout />
    </Router>
    </nav>
    <Backgroundpic />
    <Footer />
    </>

  )
}

export default App