import React from 'react';
import BackgroundRemove from './BackgroundRemove'

const SignUp = () => {
    return(
        <>
            <p className="title">Sign Up Form</p>
           
            <form className="App1">
                <input type="text" />
                <input type="email" />
                <input type="password" />
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
             <BackgroundRemove />
        </>
        
    )
};
export default SignUp;