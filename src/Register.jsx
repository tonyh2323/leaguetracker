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
            <h2>Register</h2>
          <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='full Name'/>
            <label htmlFor='email'>email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email"name="email"/>
            <label htmlFor='password'>password. A mixture of uppercase and lowercase letters, numbers, and special characters are required.</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" id="password"name="password"/>
            <button type="Submit" onClick={PasswordValidation}>Register</button>
            <button className="link-btn" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
            
        </form>

       
        </div>
    )


        function PasswordValidation(pass) {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return regex.test(pass);
        }

}
        export default Register;