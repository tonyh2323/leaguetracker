import React from 'react';
import bcrypt from "bcryptjs";


function HashPassword({pass}){
      
      const saltRounds = 10;
      const plainTextPassword = 'Pass';
      bcrypt.hash(plainTextPassword, saltRounds, function(err, hash)  {
          if (err) {
            console.error(err);
          // Store hash in your password database.
          return;
      }
         console.log('Hashed Password:', hash);

});
}
export default HashPassword;

      