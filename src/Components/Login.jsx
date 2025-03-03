
import React, {useState } from 'react';
import Register from './Register';


import { useNavigate } from 'react-router-dom';

export  const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
        };

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    
    return (
        <div className='auth-form-container'>
                <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>email</label>
                <input required value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"name="email"/>
                <label htmlFor='password'>password. </label>

                <input required value={pass} onChange={(e) => setPass(e.target.value)} type={isShown ? "text" : "password"} placeholder="*****" id="password"name="password"/>
                <div className="checkbox-container">
                    <label htmlFor="checkbox">Show password?</label>
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={isShown}
                        onChange={togglePassword}
                    />
                </div>
                <button type="submit" >Log in</button>
          
                <button className="link-btn" onClick={() => navigate("/register")}> Don't have an account? Register here</button>
              </form> 
        </div>
    )
}


export default Login;