import { Link, NavLink} from "react-router-dom";
import "../css/WordCardModalStyle.css";
import { useContext, useEffect } from "react";
import openModalContext from "../context/openModalContext";
import { FaTimes } from "react-icons/fa";
import { useCookies } from "react-cookie";

const WorkCardModal = () => {
  const {
    openModal,
    setOpenModal,
    thumbnail,
    title,
    text,
    view,
    source,
    projectId,
  } = useContext(openModalContext);
  const closeModal = () => {
    setOpenModal(false);
  };
  const [cookie, setCookie] = useCookies(["email"]);
  const usedLang = [
    "React",
    "MongoDb",
    "Node.js",
    "Express.js",
    "Cloudinary Store",
  ];

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
            <img src={thumbnail} alt="no" className="modal-image" />
            <div className="modal-title">{title}</div>
            <div className="modal-tags">
              {usedLang.map((lang, ind) => {
                return <div className="tag" key={ind}>{lang}</div>;
              })}
            </div>
            <div className="modal-description">{text}</div>
            <div className="pro-btns">
              <NavLink to={view} className={"btn"} target="_blank">
                View
              </NavLink>
              {cookie?.email && (
                <NavLink to={"/edit/" + projectId} className={"btn btn-light"}>
                  Edit
                </NavLink>
              )}
              <NavLink to={source} className={" btn "} target="_blank">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCardModal;
