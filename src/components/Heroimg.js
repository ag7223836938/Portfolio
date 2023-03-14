import "./HeroStyles.css";

import React from 'react'
import IntroImg from '../assets/bgimg.jpg'
import photo from '../assets/photo.jpeg'
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <img src={photo}/>
        {/* <p>HI, I'M A Software Developer.</p> */}
        <h1>Software Developer.</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default Heroimg