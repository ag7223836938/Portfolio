import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Work from '../components/Work';
const Project = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project