import React from 'react'
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import HeroImg2 from '../../components/HeroImg2'
import ContactForm from "./ContactForm"

function Contact() {
  return (
    <div>
      <Navbar/>
      {/* <HeroImg2 heading="CONTACT" text="Lets have a chat" /> */}
      <HeroImg2 heading="CONTACT" text="Feel free to reach out to me for any questions or opportunities!" />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
