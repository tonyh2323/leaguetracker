import {React , useState }from 'react';

import { Outlet , BrowserRouter} from "react-router-dom";
import Login from './Login';
import  Register  from './Register';
import './css/App.css';
import './css/Navbar.css';
import Header from './Header';

import Backgroundpic from './Background';
import Footer from './Footer';
import Navbar from './Navbar';
import AppRouter from './AppRouter';
import Greeting from './Greeting';

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (

    <div className="App">
     
      <BrowserRouter>
     
        <Navbar />
        <AppRouter />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App