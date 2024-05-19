import React, { useEffect, useState } from "react";
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
import openModalContext from "./context/openModalContext.js";
import IsNetworkConnect from "./components/IsNetworkConnect.js";
function App() {
  const [cookie, setCookie] = useCookies(["email"]);
  const [openModal, setOpenModal] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [view, setView] = useState("");
  const [source, setSource] = useState("");
  const [projectId, setProjectId] = useState("");
  const [usedLang, setUsedLang] = useState([]);

  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Reload the page
  //     window.location.reload();
  //   }, 6000); // Adjust the time interval in milliseconds (60,000 milliseconds = 1 minute)

  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(intervalId);
  // }, []);
  const contextValue = {
    openModal,
    setOpenModal,
    thumbnail,
    setThumbnail,
    title,
    setTitle,
    text,
    setText,
    source,
    setSource,
    view,
    setView,
    projectId,
    setProjectId,
    usedLang,
    setUsedLang,
  };
  return (
    <>
      <openModalContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<WorkCardModal />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Skills" element={<Skill />} />
          {cookie.email && <Route path="/upload" element={<UploadProject />} />}
          {cookie.email && (
            <Route path="/edit/:projectId" element={<ProjectEdit />} />
          )}
          {!cookie.email && <Route path="/signup" element={<SignupForm />} />}
          {!cookie.email && <Route path="/login" element={<LoginForm />} />}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </openModalContext.Provider>
      {!isOnline && (
        <IsNetworkConnect isOnline={isOnline} setIsOnline={setIsOnline} />
      )}
    </>
  );
}

export default App;
