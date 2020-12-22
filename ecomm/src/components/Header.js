import React from "react"

import "./Header.css"

function Header() {
    return (
        <div className="navbar-container">
            <h3 className="title">Bruno Biancardi Photography</h3>
            <ul className="landmarks-container">
                <li className="list-item"><a href="./Shop" className="landmark-link">Shop</a></li>
                <li className="list-item"><a href="" className="landmark-link">Contact</a></li>
                <li className="list-item"><a href="" className="landmark-link"><i class="fas fa-shopping-cart"></i></a></li>
                
            </ul>
        </div>
    )
}

export default Header