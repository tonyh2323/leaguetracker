import BackgroundRemove from './BackgroundRemove'
import React, {useState} from 'react';
import login from './Login';
import { useNavigate } from 'react-router-dom';

export const Register = (props) =>{
        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');
        const [name, setName] = useState('');

        const navigate = useNavigate();

        const handleSubmit = (e) =>{
            e.preventDefault();     



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
                <label htmlFor='name'>Full Name</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='full Name'/>
                <label htmlFor='email'>email</label>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email"name="email"/>
                <label htmlFor='password'>A mixture of uppercase and lowercase letters, numbers, and special characters along with 8 units in length are required for the password.</label>
                <input required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password"name="password"/>
                <button type="Submit" onClick={PasswordValidation}>Register</button>
                <button className="link-btn" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
                
            </form>
        </div>
    )
        function PasswordValidation(pass) {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return regex.test(pass);

         /*this is not working
         function HashPassword(pass) {

         const bcrypt = require('bcrypt');
         const saltRounds = 10;
         const plainTextPassword = 'pass';
         bcrypt.hash(plainTextPassword, saltRounds, (err, hash) => {
             if (err) throw err;
             // Store hash in your password database.
             console.log('Hashed Password:', hash);
         });*/

         };

    }

export default Register;