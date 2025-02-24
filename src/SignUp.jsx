export default function SignUp(){
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
        </>
    )
}