import "../css/WorkCardStyle.css";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import openModalContext from "../context/openModalContext";

const WorkCard = ({ view, thumbnail, source, title, text, projectId }) => {
  // const [cookie, setCookie] = useCookies(["email"]);
  const [showFullText, setShowFullText] = useState(false);

  const {
    setOpenModal,
    setThumbnail,
    setTitle,
    setText,
    setSource,
    setView,
    setProjectId,
  } = useContext(openModalContext);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    const lastSpaceIndex = text.lastIndexOf(" ", limit);
    const truncatedText =
      lastSpaceIndex !== -1
        ? text.substring(0, lastSpaceIndex)
        : text.substring(0, limit);

    return truncatedText;
  };
  const displayText = showFullText ? text : truncateText(text, 150);

  const openModal = (view, thumbnail, source, title, text, projectId) => {
    setOpenModal(true);
    setThumbnail(thumbnail);
    setTitle(title);
    setText(text);
    setView(view);
    setSource(source);
    setProjectId(projectId);
  };

  return (
    <div>
      <div className="project-card">
        <div
          onClick={() =>
            openModal(view, thumbnail, source, title, text, projectId)
          }
        >
          <img src={thumbnail} alt={thumbnail} />
        </div>
        <h2 className="project-title">{title}</h2>
        <div className="pro-details">
          <p>{displayText}</p>
          {text.length > 150 && (
            <span className="read-more-btn" onClick={toggleText}>
              {showFullText ? "Read Less" : "Read More"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
