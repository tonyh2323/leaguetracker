import BackgroundRemove from './BackgroundRemove'
import React, {useState} from 'react';
import login from './login';
import { useNavigate } from 'react-router-dom';

export const Register = (props) =>{
        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');
        const [name, setName] = useState('');

        const navigate = useNavigate();

        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(email);
        }
    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
          <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='full Name'/>
            <label htmlFor='email'>email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email"name="email"/>
            <label htmlFor='password'>password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password"name="password"/>
            <button type="Submit">Register</button>
            <button className="link-btn" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
            
        </form>

       
        </div>
    )
        }
        export default Register