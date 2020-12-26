import React from "react"

import './About.css';

import profile1 from "../images/immagine profilo.jpeg"

function About() {
  return (
      <div className="about-container">
          <div>
              <div className="about-image-container">
                <img src={profile1} className="img-profile-1"></img>
              </div>
              <div className="contact-info">
                <p>bruno@irelandlandscapes.com</p>
                <p>+353 874599308</p>
                <br></br>
                <p>Strandhill, Co. Sligo</p>
                <p>Ireland</p>
              </div>
              
          </div>
          <div className="intro-text">
              Born and raised in Italy, Marco Grassi is a self-taught, award-winning photographer focused on landscape 
              photography as well as an avid adventurer and experienced photo educator, leading workshops all over the world 
              to share his vision, knowledge and approach with others.
              He’s traveled the world extensively to capture the beauty around him, driven by his interest in pristine landscapes and 
              remote destinations which has led him to some of the most incredible places on Earth. His pictures, 
              mainly focused on nature, 
              evoke a sense of mightiness and highlight the power behind everything that surrounds us, from giant mountains to vast 
              7desert areas.
              Marco’s work has been published and rewarded worldwide in a large variety of media outlets, such as the National Geographic, 
              CNN, The Telegraph, 
              BBC and GEO Magazine.
          </div>
      </div>
  )
}

export default About;
