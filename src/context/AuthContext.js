import React from "react";
import { useState, createContext} from "react";

export const AuthContext = createContext()

export function AuthProvider(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value ={
        isLoggedIn,
        setIsLoggedIn
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}