import React from "react"

import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <div className="text-centered">
                <p className="footer-text bigger">Bruno Biancardi Photography</p>
                <p className="footer-text">Landscapes and Outdoors</p>
                <p>
                    <a href="https://www.linkedin.com/in/olmo-biancardi-a47144195/" target="_blank"><i class="fab fa-instagram social-icon"></i></a>
                    <a href="https://www.linkedin.com/in/olmo-biancardi-a47144195/" target="_blank"><i class="fab fa-facebook social-icon"></i></a>
                </p>
                <p className="footer-text">-</p>
                <p className="footer-text">bruno@irelandlandscape.com</p>
                
            </div>
        </div>
    )
}

export default Footer