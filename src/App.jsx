import React from 'react';
import { Outlet , BrowserRouter} from "react-router-dom";

import './Navbar.css';
import './App.css';

import Backgroundpic from './Background';
import Footer from './Footer';
import Navbar from './Navbar';
import AppRouter from './AppRouter';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
      <Backgroundpic />
      <Footer />
      <Outlet />
    </div>
  )
}

export default App