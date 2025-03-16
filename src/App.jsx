import {React , useState }from 'react';



import { Outlet , BrowserRouter} from "react-router-dom";
import Login from './Components/Login';
import  Register  from '/Register';
import './css/App.css';
import './css/Navbar.css';
import Header from './Components/ChildComponents/Header';

import Backgroundpic from './Components/ChildComponents/Background';
import Footer from './Components/ChildComponents/Footer';
import Navbar from './Components/Navbar';
import AppRouter from './Components/ChildComponents/AppRouter';


function App() {

  const [message, setMessage] = useState({});

 
  async function callHelloApi(){
    try {
      const respone = await fetch("http://localhost:3306/api/hello");
      if(!response.ok){
        
      }
      const data = await response.json();
      setMessage(data);
      console.log(data);
    } catch(error){
      console.error('Error Message: ', error);
    }
  }

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