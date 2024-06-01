import React, { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage";
import ProjectPage from  "./pages/projects/ProjectPage";
import ContactPage from  "./pages/contact/ContactPage";
import AboutPage from  "./pages/about/AboutPage";
import UploadProjectPage from "./pages/uploadProject/UploadProjectPage";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginFormPage from "./pages/login/LoginFormPage"
import SignupFormPage from "./pages/login/SignupFormPage";
import { useCookies } from "react-cookie";
import ProjectEditPage from "./pages/projectEdit/ProjectEditPage"
import SkillPage from "./pages/skill/SkillPage"
import WorkCardModal from "./pages/projects/WorkCardModal"
import openModalContext from "./context/openModalContext";
import IsNetworkConnect from "./components/IsNetworkConnect";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [cookie, setCookie] = useCookies(["email"]);
  const [openModal, setOpenModal] = useState(false);
  const [thumbnails, setThumbnails] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [view, setView] = useState("");
  const [source, setSource] = useState("");
  const [projectId, setProjectId] = useState("");
  const [usedLang, setUsedLang] = useState([]);

  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  document.addEventListener("contextmenu", (e) => {
    toast.error("Inspect Element Not Allowed!!!")
    e.preventDefault()
  })

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
    thumbnails,
    setThumbnails,
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
      <Toaster />
      <openModalContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<WorkCardModal />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Skills" element={<SkillPage />} />
          {cookie.email && <Route path="/upload" element={<UploadProjectPage />} />}
          {cookie.email && (
            <Route path="/edit/:projectId" element={<ProjectEditPage />} />
          )}
          {!cookie.email && <Route path="/signup" element={<SignupFormPage />} />}
          {!cookie.email && <Route path="/login" element={<LoginFormPage />} />}
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
