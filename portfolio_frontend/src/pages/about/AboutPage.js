import React from 'react'
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import HeroImg2 from '../../components/HeroImg2'
import AboutContent from "./AboutContent"
import aboutImg from '../../assets/about-us.jpg'

function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 
        heading="ABOUT" 
        text="I'm a friendly Front-End and Back-End Developer." 
        img={aboutImg}
      />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
