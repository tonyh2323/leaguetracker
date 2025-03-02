import React from 'react'; 


       
    export default function HashPassword({pass}) {

    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const plainTextPassword = 'pass';
    bcrypt.hash(plainTextPassword, saltRounds, (err, hash) => {
        if (err) throw err;
        // Store hash in your password database.
        console.log('Hashed Password:', hash);
    });
}