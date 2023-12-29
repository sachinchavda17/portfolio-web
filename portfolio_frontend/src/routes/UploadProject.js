import React from "react";
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import UploadForm from "../components/UploadForm";
const UploadProject = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="UPLOAD PROJECT" text="Lets Upload your work" />
      <UploadForm/>
      <Footer/>
    </div>
  );
};

export default UploadProject;
