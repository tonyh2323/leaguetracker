import bcrypt from "bcryptjs";


function HashPassword(value){
     
      const saltRounds = 10;
      const plainTextPassword = value;

      bcrypt.hash(plainTextPassword, saltRounds, (err, hash)  =>{
          if (err) {
            console.error(err);
          // Store hash in your password database.   
      }  
    //  console.log('plainTextPassword:', plainTextPassword);
     console.log('Hashed Password ready to store' , hash); 
      return hash;
});
}

export default HashPassword;

      