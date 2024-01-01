import React, { useContext } from 'react'
import Navbar from "../components/Navbar"
import HeroImg from "../components/HeroImg"
import Footer from '../components/Footer'
import Work from '../components/Work'
import openModalContext from '../context/openModalContext'
import WorkCardModal from '../components/WorkCardModal'
const Home = () => {
  const { openModal } = useContext(openModalContext)
  return (
    <div>
      {openModal ? <WorkCardModal />
        :
        <>
          <Navbar />
          <HeroImg />
          <Work />
          <Footer />
        </>
      }
    </div>
  )
}

export default Home
