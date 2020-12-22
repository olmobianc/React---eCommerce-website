import React from "react"

import "./Home.css"

function Home() {
    return (
        <div>
            <div className="main-container">
                <h4 className="text-centered font-size-24">Landscape and Outdoor Photography</h4>
                <button className="button-visit-shop">Visit Shop</button>
            </div>
            <div className="intro-section">
                <div className="intro-image">
                </div>
                <div className="intro-text">
                    Bruno Biancardi is an award-winning photographer focused on landscape photography as well as an avid 
                    adventurer and expedition leader. He’s traveled the world extensively to capture the beauty around him, 
                    driven by his interest in pristine landscapes and remote destinations which has led him to some of the most 
                    incredible places on Earth.
                    <div className="btn-rd-mr-container">
                        <button className="button-read-more">Read More</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home