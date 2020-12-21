import React from "react"

import "./Header.css"

function Header() {
    return (
        <div className="navbar-container">
            <h3>Bruno Biancardi Photography</h3>
            <ul className="landmarks-container">
                <li className="list-item"><a href="" className="landmark-link">Shop</a></li>
                <li className="list-item"><a href="" className="landmark-link">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header