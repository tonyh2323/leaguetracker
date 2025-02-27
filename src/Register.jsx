import BackgroundRemove from './BackgroundRemove'
import React, {useState} from 'react';
export const Register = () =>{
        const [email, setEmail] = useState('');
        const [pass, setpass] = useState('');
        const [name, setName] = useState('');

        const handleSubmit = () =>{
            email.preventDefault();
            console.log(email);
        }
    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
          <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input value={name} name='name' id='name' placeholder='full Name'/>
            <label htmlFor='email'>email</label>
            <input value={email} type="email" placeholder="youemail@gmail.com" id="email"name="email"/>
            <label htmlFor='password'>password</label>
            <input value={pass} type="password" placeholder="*****" id="password"name="password"/>
            <button type="Submit">Login</button>
         </form>
         <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
        <BackgroundRemove />
        </div>
    )
        }
        export default Register