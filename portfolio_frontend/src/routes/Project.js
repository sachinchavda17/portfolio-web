import React, { createContext, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import WorkCardModal from "../components/WorkCardModal";
import openModalContext from "../context/openModalContext";

function Project() {
  const { openModal } = useContext(openModalContext);
  return (
    <div>
      {/* {openModal ? <WorkCardModal /> :
        ( */}
      <>
        <Navbar />
        <HeroImg2 heading="PROJECTS" text="Some of my recent work." />
        <Work />
        <Footer />
        {openModal && <WorkCardModal />}
      </>
      {/* )} */}
    </div>
  );
}

export default Project;
