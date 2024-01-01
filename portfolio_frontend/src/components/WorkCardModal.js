import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import "../css/WordCardModalStyle.css";
import { useContext } from "react";
import openModalContext from "../context/openModalContext";
import { FaTimes } from "react-icons/fa";
import { useCookies } from "react-cookie";

const WorkCardModal = () => {
  const navigate = useNavigate();
  const { openModal, setOpenModal, thumbnail, title, text, view, source, projectId } = useContext(openModalContext);
  console.log({ openModalContext })
  const closeModal = () => {
    setOpenModal(false);
  };
  const [cookie,setCookie] = useCookies(["email"])
  const usedLang = ["React", "MongoDb", "Node.js", "Express.js", "Cloudinary Store"]

  return (
    <>
      <div className="modal-project " >
        <div className="modal-project-wrapper" ></div>
        <div className="modal-content-container">
          <div className="modal-content">
            <div className="close-button">
              <FaTimes size={20} onClick={closeModal} />
            </div>
            <img src={thumbnail} alt="no" className="modal-image" />
            <div className="modal-title">{title}</div>
            <div className="modal-tags">
              {usedLang.map((lang, ind) => {
                return <div className="tag">{lang}</div>
              })}
            </div>
            <div className="modal-description">{text}</div>
            <div className="pro-btns">
              <NavLink to={view} className={"btn"} target="_blank">
                View
              </NavLink>
              <NavLink to={source} className={"btn"} target="_blank">
                Source
              </NavLink>
              {cookie?.email && (
                <NavLink to={"/edit/" + projectId} className={"btn"}>
                  Edit
                </NavLink>
              )}
            </div>
          </div>
        </div>
        {/* <div
          className="modal-project-container"
          onClick={(e) => closeModal}
        >
          <img src={thumbnail} alt={"no Img "} />
          <h2 className=" project-title">{title}</h2>
          <div className=" pro-details">
            <p>{text}</p>
            <div className="pro-btns">
              <NavLink to={view} className={"btn"} target="_blank">
                View
              </NavLink>
              <NavLink to={source} className={"btn"} target="_blank">
                Source
              </NavLink>
              {cookie?.email && (
                <NavLink to={"/edit/" + projectId} className={"btn"}>
                  Edit
                </NavLink>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default WorkCardModal;
