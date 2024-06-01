import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import HeroImg from "./HeroImg";
import Footer from "../../components/Footer";
import Work from "../projects/Work";
import openModalContext from "../../context/openModalContext";
import WorkCardModal from "../projects/WorkCardModal";
const Home = () => {
  const { openModal } = useContext(openModalContext);
  return (
    <div>
      {/* {openModal ? <WorkCardModal />
        : */}
      <>
        <Navbar />
        <HeroImg />
        <Work />
        <Footer />
        {openModal && <WorkCardModal />}
      </>
      {/*  } */}
    </div>
  );
};

export default Home;
