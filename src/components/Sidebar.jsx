import React from 'react';
import {NavLink} from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut} from "react-icons/io5";

const Sidebar = () => {
    return (
        <div>
            <aside className="menu pl-5 pr-5 has-shadow">
                <p className="menu-label pl-3">General</p>
                <ul className="menu-list pl-4">
                    <li>
                        <NavLink to={"/dashboard"}><IoHome/>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/products"}><IoPricetag/>Products</NavLink>
                    </li>
                </ul>
                <p className="menu-label pl-3">Admin</p>
                <ul className="menu-list pl-4">
                    <li>
                        <NavLink to={"/penjual"}><IoPerson/>Penjual</NavLink>
                    </li>
                    
                </ul>
                <p className="menu-label pl-3">Settings</p>
                <ul className="menu-list pl-4">
                    <li>
                        <button className="button is-white"><IoLogOut/>Logout</button>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar
