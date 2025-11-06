import "./WorkCardStyle.css";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import openModalContext from "../../context/openModalContext";
import Carousel from "./Carousel";
import { BsFillPinAngleFill } from "react-icons/bs";

const WorkCard = ({
  view,
  thumbnails,
  source,
  title,
  text,
  projectId,
  usedLang,
  isPinned,
}) => {
  // const [cookie, setCookie] = useCookies(["email"]);
  const [showFullText, setShowFullText] = useState(false);

  const {
    setOpenModal,
    setThumbnails,
    setTitle,
    setText,
    setSource,
    setView,
    setProjectId,
    setUsedLang,
    setIsPinned,
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

  const openModal = (
    view,
    thumbnails,
    source,
    title,
    text,
    projectId,
    usedLang
  ) => {
    setOpenModal(true);
    setThumbnails(thumbnails);
    setTitle(title);
    setText(text);
    setView(view);
    setSource(source);
    setProjectId(projectId);
    setUsedLang(usedLang);
  };

  return (
    <div
      className="project-card"
      onClick={() =>
        openModal(view, thumbnails, source, title, text, projectId, usedLang)
      }
    >
      <div className="project-card-header">
        <Carousel images={thumbnails} showBtn={false} />
        {isPinned && (
          <div className="pinned-badge">
            <BsFillPinAngleFill className="pin-icon" />
          </div>
        )}
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
  );
};

export default WorkCard;
