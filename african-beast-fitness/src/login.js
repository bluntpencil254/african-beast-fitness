const Login = () => {
    return ( 
        <div className="login">
           
            <div className="form">
            <div className="mess">
                <p>Hello,</p>
                <p>Welcome.</p><br /><br /><br />
                <p>LOG IN:</p>
            </div>
                        <form action="Login">
                            <label htmlFor="Username">Username:</label><br />
                            <input type="text" /> <br />
                            <label htmlFor="Password">Password:</label><br />
                            <input type="password" required /> <br /><br />
                            <button>Login</button>
                            <p>Forgot password? <a href="/">Click here.</a></p>
                        </form>
                </div>
            
        </div>
        );
}
 
export default Login;