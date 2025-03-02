import React from 'react';
import HashPassword from './HashPassword';



    function PasswordValidation(pass) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(pass);
        
        <HashPassword />
    }
    export default PasswordValidation;