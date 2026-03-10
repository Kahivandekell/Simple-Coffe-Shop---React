import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import './LoginPage.css'


const LoginPage = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const {setIsLoggedIn} = useContext(AuthContext)

    const formSumbit = (form) =>{
        form.preventDefault()

        if (login === "user" && password === "user"){
            console.log("zalogowano pomyslnie")
            setIsLoggedIn(true)
        } else{
            console.log("złe dane logowania")
        }
    }
    return(
        <div className="Login-container">
            <form onSubmit={formSumbit}>
                <div className="header">
                    <h2>Login</h2>
                </div>
                <div className="inputs">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={login} onChange={(val) => setLogin(val.target.value)}/>
                </div>
                <div className="inputs">
                    <label htmlFor="user-password">Password</label>
                    <input type="password" id="user-password" autoComplete="off" value={password} onChange={(val) => setPassword(val.target.value)}/>
                </div>
                <div className="login-button">
                    <button>Submit</button>
                </div>
                
            </form>
        </div>

    )
}


export default LoginPage