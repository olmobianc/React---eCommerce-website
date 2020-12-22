import React from "react"

import { Link } from "react-router-dom";

import "./Header.css"

function Header() {
    return (
        <div className="navbar-container">
            <h3 className="title"><Link to="/" className="title-link">Bruno Biancardi Photography</Link></h3>
            <ul className="landmarks-container">
                <li className="list-item"><Link to="/shop" className="landmark-link">Shop</Link></li>
                <li className="list-item"><a href="" className="landmark-link">Contact</a></li>
                <li className="list-item"><a href="" className="landmark-link"><i class="fas fa-shopping-cart"></i></a></li>  
            </ul>
        </div>
    )
}

export default Header