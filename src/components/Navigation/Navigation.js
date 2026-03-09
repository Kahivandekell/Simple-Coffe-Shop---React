import React from "react";
import { Link } from 'react-router-dom'
import './Navigation.css'

import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



const Navigation = () => {
    const {isLoggedIn} = useContext(AuthContext)

    return(
        <nav className="navbar">
            <a><Link to="/">Coffee Shop</Link></a>
                
            <div>
                <ul className="navbard-links">
                    <li>
                        <a><Link to="/shop">Shop</Link></a>
                    </li>
                    <li>
                        <a><Link to="/cart">Cart</Link></a>
                    </li>
                    <li>
                        {isLoggedIn === true ? <button>wyloguj</button>: ""}
                    </li>
                </ul>
            </div>
        </nav>
        )  
}

export default Navigation
