import React from "react";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import UploadProject from "./routes/UploadProject";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { useCookies } from "react-cookie";
import ProjectEdit from "./routes/ProjectEdit";
import Skill from "./routes/Skill.js";
import WorkCardModal from "./components/WorkCardModal.js";
function App() {
  const [cookie, setCookie] = useCookies(["email"]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/modal" element={<WorkCardModal />} />
        {cookie.email && <Route path="/upload" element={<UploadProject />} />}

        {cookie.email && (
          <Route path="/edit/:projectId" element={<ProjectEdit />} />
        )}

        {!cookie.email && <Route path="/signup" element={<SignupForm />} />}
        {!cookie.email && <Route path="/login" element={<LoginForm />} />}

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
