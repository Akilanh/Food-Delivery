import React, { useState } from "react";
import './Navbar.css';
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

// Update Navbar to accept props, specifically numbers
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <h1 className="logo"><a href="/"> MAVY. </a></h1>
            <ul className="navbar-menu">
                <Link to={'/'}  onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <Link to={'/foodItem'} onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</Link>
                <a href='#about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</a>
                <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                  <Link to={'/Cart'} > <img src={assets.basket_icon}  alt="" /></Link> 
                    <div className="dot">
                    </div>
                </div>
                <button onClick={()=>setShowLogin(true)} >Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
