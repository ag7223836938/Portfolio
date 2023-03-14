import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';
import Heroimg3 from '../components/Heroimg3';
const About = () => {
  return (
    <div>
      <NavBar />
      <Heroimg3 heading="ABOUT." text="This is Akhil Gupta. I enjoy Problem Solving and MERN Development."/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About