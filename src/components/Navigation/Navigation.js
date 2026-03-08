import React from "react";
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
    render() {
        return(
            <nav>
                <h2></h2>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/articles">Articles</Link></li>
                </ul>
            </nav>
        )
    }
}