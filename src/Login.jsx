import BackgroundRemove from './BackgroundRemove'
import React, {useState } from 'react';
import Register from './Register';


import { useNavigate } from 'react-router-dom';

export  const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

    const form = document.querySelector("form");
        form.addEventListener('submit', (event) => {
            const password = event.target.password.value;
            if (!PasswordValidation(password)) {
                alert('Password does not meet security criteria.');
                event.preventDefault();
            }
        });
    }




    return (
        <div className='auth-form-container'>
                <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>email</label>
                <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"name="email"/>
                <label htmlFor='password'>password</label>
                <input value={pass}  onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password"name="password"/>
                <button type="submit" onClick={PasswordValidation}>Log in</button>
          
                <button className="link-btn" onClick={() => navigate("/register")}> Don't have an account? Register here</button>
              </form> 
        </div>
    )

function PasswordValidation(pass) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pass);
}

}


export default Login;