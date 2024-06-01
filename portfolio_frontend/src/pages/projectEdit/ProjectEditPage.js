import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import HeroImg2 from "../../components/HeroImg2.js";
import SingleProjectEdit from "./SingleProjectEdit.js";
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