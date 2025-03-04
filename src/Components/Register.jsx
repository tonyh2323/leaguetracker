
import React, {useState} from 'react';
import login from './Login';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import PasswordValidation from './ChildComponents/PasswordValidation';
import HashPassword from './ChildComponents/HashPassword';

export const Register = (props) =>{
        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');
        const [first, setfirst] = useState('');
        const [last, setlast] = useState('');
        const [isShown, setIsSHown] = useState(false);
        const togglePassword = () => {
            setIsSHown((isShown) => !isShown);
          };
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
             else{
                    alert('Information has been saved');
                }
        });
    }

    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit} >
                  
            <label htmlFor='first'>First Name, Last Name</label>
                <div className="side-by-side">
                    <input required value={first} onChange={(e) => setfirst(e.target.value)} name='first' id='first' placeholder='First Name'/>
                    <input required value={last} onChange={(e) => setlast(e.target.value)} name='last' id='last' placeholder='Last Name'/>
                </div>

                <label htmlFor='email'>email</label>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"name="email"/>
                <label htmlFor='password'>A mixture of uppercase and lowercase letters, numbers, and special characters along with 8 units in length are required for the password.</label>

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
                <button type="Submit" onClick={() => PasswordValidation(pass)}>Register</button>
                <button className="link-btn" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
                
            </form>
           
       
           
        </div>
    ) 
}
export default Register;