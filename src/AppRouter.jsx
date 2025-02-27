import React from 'react';
import { BrowserRouter, Outlet, Routes, Route, Router } from "react-router-dom";

import Players from './Players';
import Coaches from './Coaches';
import Parents from './Parents';
import Contact from './Contact';
import About from './About';

import SignUp from './SignUp';
import Home from './Home';
import NotFound from './NotFound';
import {Login} from './Login';


export default function AppRouter() {
    return (
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Players" element={<Players />} />
            <Route path="/Coaches" element={<Coaches />} />
            <Route path="/Parents" element={<Parents />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    
    );
}