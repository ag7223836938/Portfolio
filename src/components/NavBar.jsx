import "./NavbarStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {
    const [click,setClick]=React.useState(false);
    const hc=()=>setClick(!click);

    const [color,setColor]=React.useState(false);
    const cc=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }else{setColor(false);}
    }
    window.addEventListener("scroll",cc);

  return (
    <div className={color?"header header-bg":"header"}>
        <Link to="/">Akhil's Portfolio.</Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={hc}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  )
}

export default NavBar