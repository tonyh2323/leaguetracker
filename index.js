// Import the library

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    console.log("reporting from Index file");
    <App />
  </React.StrictMode>
);