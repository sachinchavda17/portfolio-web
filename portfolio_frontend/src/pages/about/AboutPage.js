import React from 'react'
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import HeroImg2 from '../../components/HeroImg2'
import AboutContent from "./AboutContent"

function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Im a friendly Front-End and Back-End Developer." />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
