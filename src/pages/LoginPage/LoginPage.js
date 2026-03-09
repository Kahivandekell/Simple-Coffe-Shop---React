import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const LoginPage = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const {setIsLoggedIn} = useContext(AuthContext)

    const formSumbit = (form) =>{
        form.preventDefault()
        //console.log(login, password)

        if (login === "user" && password === "user"){
            console.log("zalogowano pomyslnie")
            setIsLoggedIn(true)
        } else{
            console.log("złe dane logowania")
        }
    }
    return(
        <div>
            <form onSubmit={formSumbit}>
                <h2>Sing in</h2>
                <label for="username">Login:</label>
                <input type="text" id="username" value={login} onChange={(val) => setLogin(val.target.value)}/>

                <label for="user-password">Password:</label>
                <input type="text" id="user-password" value={password} onChange={(val) => setPassword(val.target.value)}/>
                <button>Submit</button>
            </form>
        </div>

    )
}


export default LoginPage