import "./AboutStyles.css";
import pro1 from "../assets/p1.jpg";
import pro2 from "../assets/p2.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hi, I'm a coder with a good sense of analysing and solving the problems using data structures and algorithms and always eager to learn new things daily :D</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pro1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={pro2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;