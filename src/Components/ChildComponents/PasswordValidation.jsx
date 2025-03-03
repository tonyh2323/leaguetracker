import React from 'react';




    const  PasswordValidation = (pass) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        return regex.test(pass);
         
    };
export default PasswordValidation;