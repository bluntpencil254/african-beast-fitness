const SignUp = () => {
    return ( 
        <div className="Sign Up">
           
            <div className="form">
            <div className="mess">
                <p>Hello,</p>
                <p>Welcome.</p><br /><br /><br />
                <p>SIGN UP:</p>
            </div>
                        <form action="Login">
                            <label htmlFor="Username">Create Username:</label><br />
                            <input type="text" /> <br />
                            <label htmlFor="Password">Password:</label><br />
                            <input type="password" /> <br />
                            <label htmlFor="Password">Confirm Pass:</label><br />
                            <input type="password" /> <br /><br />
                            <button>Sign Up</button>
                            <p>Forgot password? <a href="/">Click here.</a></p>
                        </form>
                </div>
            
        </div>
     );
}
 
export default SignUp;