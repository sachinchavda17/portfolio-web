import React, { createContext, useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroImg2 from "../../components/HeroImg2";
import Work from "./Work";
import WorkCardModal from "./WorkCardModal";
import openModalContext from "../../context/openModalContext";
import projectImg from "../../assets/project.jpg";

function Project() {
  const { openModal } = useContext(openModalContext);
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my recent work." img={projectImg}/>
      <Work />
      <Footer />
      {openModal && <WorkCardModal />}
    </div>
  );
}

export default Project;
