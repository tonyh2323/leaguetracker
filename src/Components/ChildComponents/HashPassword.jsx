import React from 'react';
import bcrypt from "bcryptjs";


function HashPassword(value){
      console.log("value:",value);
      const saltRounds = 10;
      const plainTextPassword = value;

      bcrypt.hash(plainTextPassword, saltRounds, (err, hash)  =>{
          if (err) {
            console.error(err);
          // Store hash in your password database.
          console.log('Hashed Password ', hash);   
      }  
      console.log('plainTextPassword:', plainTextPassword);
      console.log('Hashed Password' , hash); 
});
}
export default HashPassword;

      