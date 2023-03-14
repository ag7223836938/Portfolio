import "./footerStyles.css";
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20}
                            style={{
                                color: "#fff",
                                marginRight: "2rem"
                            }}
                        />
                        <div>
                            <p>MIG 71,Barra 3,Kanpur</p>
                            <p>Uttar Pradesh, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20}
                            style={{
                                color: "#fff",
                                marginRight: "2rem"
                            }}
                        />
                            +918209417471</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20}
                            style={{
                                color: "#fff",
                                marginRight: "2rem"
                            }}
                        />
                            ag7223836938@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About Me</h4>
                    <p>This is Akhil Gupta. I enjoy Problem Solving and MERN Development.</p>
                    <div className="social">
                        <FaInstagram size={30}
                            style={{
                                color: "#fff",
                                marginRight: "1rem"
                            }}
                        />
                        <FaGithub size={30}
                            style={{
                                color: "#fff",
                                marginRight: "1rem"
                            }}
                        />
                        <FaLinkedin size={30}
                            style={{
                                color: "#fff",
                                marginRight: "1rem"
                            }}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;