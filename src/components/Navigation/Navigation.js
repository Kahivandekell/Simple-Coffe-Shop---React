import React from "react";
import { Link } from 'react-router-dom'
import './Navigation.css'

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navigation = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    return(
        <nav className="navigation-container">
            <div className="brandName">
                <h2>Coffe Shop</h2>
            </div>
            <div className='linksList-container'>
                <ul className="linksList">
                    <li className="linkItem">
                        <Link className="nav-link" to="/"> Shop</Link>
                    </li>
                    <li className="linkItem">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li className="linkItem">
                        <button className="logoutButton" onClick={() => setIsLoggedIn(false)}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
        )  
}

export default Navigation
