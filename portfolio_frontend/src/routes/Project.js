import React, { createContext, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import WorkCardModal from "../components/WorkCardModal";

export const ModalContext = createContext({ setShowProjectModal: false });

function Project() {
  const { setShowProjectModal } = useContext(ModalContext);
  return (
    <ModalContext.Provider>
      <div>
        {setShowProjectModal ? (
          <WorkCardModal />
        ) : (
          <>
            <Navbar />
            <HeroImg2 heading="PROJECTS" text="Some of my recent work." />
            <Work />
            <Footer />
          </>
        )}
      </div>
    </ModalContext.Provider>
  );
}

export default Project;
