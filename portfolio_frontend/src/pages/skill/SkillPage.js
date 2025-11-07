import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Skills from './Skills'
import HeroImg2 from '../../components/HeroImg2'
import skillImg from '../../assets/skills.jpg'
const SkillPage = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="SKILLS" text="Here are some of my skills on which I have been working on for the
          past 3 years." img={skillImg} />
      <Skills />
      <Footer />
    </div>
  )
}

export default SkillPage
