import React, {useState} from 'react';
import axios from 'axios'

import login from './src/Components/Login';
import Home from './src/Components/Home';
import { Link, useNavigate } from 'react-router-dom';
import PasswordValidation from './src/Components/ChildComponents/PasswordValidation';
import HashPassword from './src/Components/ChildComponents/HashPassword';


function Register(){
    const [values, setValues] = useState({
        first: ''
    })

    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
      };
    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault()     
     
        
       
        axios.post('http://localhost:3306/add_user', values)
        
        .then((res)=>{  
            
            console.log('inside error',res)
            navigate('/')
        })
        .catch((err)=>console.log("error",err))
        navigate('/')
         




}
    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit} >
                  
            <label htmlFor='first'>First Name, Last Name</label>
                <div className="side-by-side">
                    <input type="text" name='first' required onChange={(e) => setValues({...values, first: e.target.value})} placeholder='First name' id='first'/>
                </div>
                <button type="Submit" >Register</button>
                
               
                 
            </form>
                
                <button className="link-btn" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
                     
       
           
        </div>
    ) 
}
export default Register;