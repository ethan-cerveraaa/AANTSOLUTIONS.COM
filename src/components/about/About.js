import React from 'react'
import "./About.css";
import coverImage from "../../media/coverImage.png";


export const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3>In Creation</h3>
            <p>We are in the process of creating the website, in a few days it will be up and running.</p>
        </div>
        <div className="about-img">
            <img 
            src= { coverImage } 
            alt= { coverImage } />
        </div>
    </div>
  )
}
