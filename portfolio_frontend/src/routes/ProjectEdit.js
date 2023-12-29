import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import SingleProjectEdit from "../components/SingleProjectEdit.js";
const ProjectEdit = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="EDIT" text="Edit Your Project." />
      <SingleProjectEdit />
      <Footer />
    </div>
  );
};

export default ProjectEdit;
