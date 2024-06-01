import { Link, NavLink } from "react-router-dom";
import "./WordCardModalStyle.css";
import { useContext, useEffect } from "react";
import openModalContext from "../../context/openModalContext";
import { FaTimes } from "react-icons/fa";
import { useCookies } from "react-cookie";
import Carousel from "./Carousel";

const WorkCardModal = () => {
  const {
    openModal,
    setOpenModal,
    thumbnails,
    title,
    text,
    view,
    source,
    projectId,
    usedLang,
  } = useContext(openModalContext);
  console.log(usedLang);
  const closeModal = () => {
    setOpenModal(false);
  };
  const [cookie, setCookie] = useCookies(["email"]);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);


  return (
    <>
      {/* <div className="modal-project " > */}
      <div className={`modal-project-wrapper ${openModal ? "active" : ""}`}>
        <div className="modal-content-container">
          <div className="modal-content">
            <div className="close-button">
              <FaTimes size={20} onClick={closeModal} />
            </div>
            {/* <img src={thumbnail} alt="no" className="modal-image" /> */}
            <Carousel images={thumbnails}/>
            <div className="modal-title">{title}</div>
            <div className="modal-tags">
              {usedLang.map((lang, ind) => {
                return (
                  <div className="tag" key={ind}>
                    {lang}
                  </div>
                );
              })}
            </div>
            <div className="modal-description">{text}</div>
            <div className="pro-btns">
              <NavLink
                to={view}
                className={"btn"}
                target="_blank"
                onClick={closeModal}
              >
                View Live
              </NavLink>
              {cookie?.email && (
                <NavLink
                  to={"/edit/" + projectId}
                  className={"btn btn-light"}
                  onClick={closeModal}
                >
                  Edit
                </NavLink>
              )}
              <NavLink
                to={source}
                className={" btn "}
                target="_blank"
                onClick={closeModal}
              >
                View Code
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCardModal;
