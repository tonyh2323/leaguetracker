import BackgroundRemove from './BackgroundRemove'
import React, {useState} from 'react';
export  const Login = () =>{
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');

    const handleSubmit = () =>{
        email.preventDefault();
        console.log(email);
    }
    return (
        <div className='auth-form-container'>
            <h2>Log In</h2>
         <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>email</label>
            <input value={email} type="email" placeholder="youemail@gmail.com" id="email"name="email"/>
            <label htmlFor='password'>password</label>
            <input value={pass} type="password" placeholder="*****" id="password"name="password"/>
            <button type="submit">Login</button>
         </form>
         <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register</button>
        <BackgroundRemove />
        </div>
    )
    
}

export default Login;