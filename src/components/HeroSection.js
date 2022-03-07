import React from "react";
import './hero.css'
const HeroSection =()=>{
    return(
        <div className="hero-container">
           <video src={require("../videos/video-2.mp4")} autoPlay loop muted/>
     
           <h1 className="title">I LOVE YOU SRAVANI</h1>
           <p className="des">what are you waiting for ?</p>
           <div className="hero-btns">
            <button className="button1">GET STARTED</button>
            <button className="button2">WATCH TRAILER</button>
            </div>
     
        </div>
    )
}

export default HeroSection