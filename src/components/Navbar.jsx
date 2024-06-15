import React from 'react'
import {NavLink} from "react-router-dom";
import Logo from "../img/Logo.png";

const Navbar = () => {
    return (
        <div>
            <nav 
            className="navbar is fixed-top has-shadow pt-2 pb-2" 
            role="navigation" 
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <NavLink to="/dashboard" className="navbar-item">
                    <img src={Logo} width="100" height="130" alt="logo"/>
                </NavLink>

                <a 
                    href='!#' 
                    role="button" 
                    className="navbar-burger burger" 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample"
                >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
        </div>
        
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                <button className="button is-light">
                    Log out
                </button>
                </div>
            </div>
            </div>
        </div>
        </nav>
    </div>
)
}

export default Navbar
