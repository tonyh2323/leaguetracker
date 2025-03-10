import React from 'react';
import bcrypt from "bcryptjs";


function HashPassword({value}){
      
      const saltRounds = 10;
      const plainTextPassword = value;
      bcrypt.hash(plainTextPassword, saltRounds, (err, hash)  =>{
          if (err) {
            console.error(err);
          // Store hash in your password database.
          console.log('Hashed Password , pass:', hash);   
      }  
      //console.log('plainTextPassword:', plainTextPassword);
});
}
export default HashPassword;

      