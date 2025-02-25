import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import './Navbar.css';
import './App.css';

import Backgroundpic from './background';
import Footer from './Footer';
import Layout from './Layout.jsx';

function App() {
  return (
    <>
    <nav className="navbar">
    <Router>
       <Layout />
    </Router>
    </nav>
      <Backgroundpic />
      <Footer />
    </>
  )
}

export default App