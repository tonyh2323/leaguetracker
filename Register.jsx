import React, {useState} from 'react';
import axios from 'axios'

import login from './src/Components/Login';
import Home from './src/Components/Home';
import { Link, useNavigate } from 'react-router-dom';
import PasswordValidation from './src/Components/ChildComponents/PasswordValidation';
import HashPassword from './src/Components/ChildComponents/HashPassword';

function Register(){
    const [values, setValues] = useState({
        email: '',
        pass: '',
        first: '',
        last: ''

    })

    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
      };
    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault()     
       console.log('password before sending..',values.pass);
        HashPassword(values.pass)
        console.log('Hashed Pass' , hash);
       
        axios.post('http://localhost:3306/add_user', values)
        .then((res)=>{  
            
            console.log('inside error',res)
            navigate('/')
        })
        .catch((err)=>console.log("error",err))
        navigate('/')
        
    const form = document.querySelector("form");
    form.addEventListener('submit', (event) => {
        const password = event.target.password.value;
        if (!PasswordValidation(password)) {
            alert('Password requires uppercase and lowercase letters, a number ,and a special character.  Password must be at least 8 units in length.');
           event.preventDefault();
        }
            

        
    });
}
    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit} >
                  
            <label htmlFor='first'>First Name, Last Name</label>
                <div className="side-by-side">

                
                    <input type="text" name='first' required onChange={(e) => setValues({...values, first: e.target.value})} placeholder='First name' id='first'/>

                    <input type="text" required  onChange={(e) => setValues({...values, last: e.target.value})} name='last' id='last' placeholder='Last Name'/>
                </div>

                <label htmlFor='email'>email</label>
                <input required onChange={(e) => setValues({...values, email: e.target.value})} type="email" placeholder="youremail@gmail.com" id="email"name="email"/>
                <label htmlFor='password'>A mixture of uppercase and lowercase letters, numbers, and special characters along with 8 units in length are required for the password.</label>

                <input required  onChange={(e) => setValues({...values, pass: e.target.value})} type={isShown ? "text" : "password"} placeholder="*****" id="password"name="password"/>
                
                <div className="checkbox-container">
                    <label htmlFor="checkbox">Show password?</label>
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={isShown}
                        onChange={togglePassword}
                    />
                </div>
                <button type="Submit" onClick={() => PasswordValidation(...values.pass)}>Register</button>
                
               
                 
            </form>
                
                <button className="link-btn" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
                     
       
           
        </div>
    ) 
}
export default Register;