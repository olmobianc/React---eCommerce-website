import React from "react"
import "./Home.css"
import profile2 from "../images/profile2.jpg"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="main-container">
                <div className="btn-vt-sh-container">
                    <h4 className="text-centered font-size-24">Landscape and Outdoor Photography</h4>
                    <Link to="/shop" className="link-visit-shop"><button className="button-visit-shop">Visit Shop</button></Link>
                </div>
            </div>
            <div className="intro-section">
                <div className="intro-image">
                    <img src={profile2} className="img-profile-2"></img>
                </div>
                <div className="intro-text">
                    Bruno Biancardi is an award-winning photographer focused on landscape photography as well as an avid 
                    adventurer and expedition leader. He’s traveled the world extensively to capture the beauty around him, 
                    driven by his interest in pristine landscapes and remote destinations which has led him to some of the most 
                    incredible places on Earth.
                    <div className="btn-rd-mr-container">
                        <Link to="/about" className="landmark-link"><button className="button-read-more">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home