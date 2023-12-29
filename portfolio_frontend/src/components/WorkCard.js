import "../css/WorkCardStyle.css";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { NavLink, Link } from "react-router-dom";
import WorkCardModal from "./WorkCardModal";
import { ModalContext } from "../routes/Project";

const WorkCard = ({ view, thumbnail, source, title, text, projectId }) => {
  const [cookie, setCookie] = useCookies(["email"]);
  const [showFullText, setShowFullText] = useState(false);

  const { setShowProjectModal } = useContext(ModalContext);

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
  return (
    <div>
      {/* {!showCardModal ? ( */}
      <div className="project-card">
        <div onClick={() => setShowProjectModal(true)}>
          <img src={thumbnail} alt={"no Img "} />
        </div>
        <h2 className="project-title">{title}</h2>
        <div className="pro-details">
          <p>{displayText}</p>
          {text.length > 150 && (
            <span className="read-more-btn" onClick={toggleText}>
              {showFullText ? "Read Less" : "Read More"}
            </span>
          )}
          <div className="pro-btns">
            <NavLink to={view} className={"btn"} target="_blank">
              View
            </NavLink>
            <NavLink to={source} className={"btn"} target="_blank">
              Source
            </NavLink>
            {cookie.email && (
              <NavLink to={"/edit/" + projectId} className={"btn"}>
                Edit
              </NavLink>
            )}
          </div>
        </div>
      </div>
      {/* ) : (
        <WorkCardModal
          onClick={(e) => setShowCardModal(false)}
          view={view}
          thumbnail={thumbnail}
          source={source}
          title={title}
          text={text}
          projectId={projectId}
          showCardModal={showCardModal}
          setShowCardModal={setShowCardModal}
          displayText={displayText}
          toggleText={toggleText}
          showFullText={showFullText}
          setShowFullText={setShowFullText}
          cookie={cookie}
        />
      )} */}
    </div>
  );
};

export default WorkCard;
