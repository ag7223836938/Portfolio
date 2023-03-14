import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Heroimg2 heading="CONTACT." text="Let's have a chat"/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact