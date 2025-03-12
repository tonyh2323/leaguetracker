

import React, {useState} from 'react';
import axios from 'axios'
import login from './Login';
import Home from './Home';
import { Link, useNavigate } from 'react-router-dom';
import PasswordValidation from './ChildComponents/PasswordValidation';
import HashPassword from './ChildComponents/HashPassword';

function Register(){
    const [isShown, setIsSHown] = useState(false);
    const [values, setValues] = useState({
        first: '',
        last: '',
        password: '',
        passwordhash: '',
        passwordsalt: '',
        hashalgorithid: '',
        email: ''
        
    })
    
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    const navigate = useNavigate();
    };

    function handleSubmit (e) {
        e.preventDefault()     
      
    const form = document.querySelector("form");
    form.addEventListener('submit', (event) => {
        const password = event.target.password.value;
        if (!PasswordValidation(password)) {
            alert('Password requires uppercase and lowercase letters, a number ,and a special character.  Password must be at least 8 units in length.');
           event.preventDefault();
        }
            
            axios.post('/add_user', values)
           // navigate('/')
            .then((res)=>{
              
                
                console.log(res)
            })
            .catch((err)=>console.log(err))
        
    });
}




    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit} >
                  
            <label htmlFor='first'>First Name, Last Name</label>

                <div className="side-by-side">
                    <input type='text' name='first' required onChange={(e)=> setValues({...values, first: e.target.value})} id='first'placeholder='First Name'/>
                    <input type='text' name='last' required onChange={(e)=> setValues({...values, last: e.target.value})} id='last'placeholder='Last Name'/>
                 </div>
                <label htmlFor='email'>email</label>
                 <input required type='email' name='email' onChange={(e)=> setValues({...values, email: e.target.value})} id='email'placeholder="youremail@gmail.com"/>
                <label htmlFor='password'>A mixture of uppercase and lowercase letters, numbers, and special characters along with 8 units in length are required for the password.</label>
                <input required onChange={(e)=> setValues({...values, password: e.target.value})} type={isShown ? "text" : "password"} placeholder="*****" id="password"name="password"/>
                <div className="checkbox-container">
                    <label htmlFor="checkbox">Show password?</label>
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={isShown}
                        onChange={togglePassword}
                    />
                </div>
                <button type="Submit" onClick={() => PasswordValidation(password)}>Register</button>

            </form>
                
                <button className="link-btn" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
                     
       
           
        </div>
    ) 
}
export default Register;