import React from "react";
function Login({onLogin}){
    
    return (
    <div>This is a Login page
        <button onClick={onLogin}>Login</button>
    </div>)
}
export default Login;