import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import HeroImg2 from '../components/HeroImg2'
const Skill = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="SKILLS" text="Here are some of my skills on which I have been working on for the
          past 3 years." />
      <Skills />
      <Footer />
    </div>
  )
}

export default Skill
