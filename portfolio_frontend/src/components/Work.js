import "../css/WorkCardStyle.css";
import React, { useEffect, useState } from "react";
import WorkCard from "./WorkCard";
import { makeGETRequest } from "../utils/serverHerlper";
import { FaSpinner } from "react-icons/fa";
import ErrorMsg from "./ErrorMsg";
import SuccessMsg from "./SuccessMsg";
import Img from "../assets/Infinity-1s.gif";

const Work = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await makeGETRequest("/project/get/allproject");
        setProjectData(response.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setError("Error fetching project data Try to Reload" );
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const closeErrorSuccess = () => {
    setError("");
    setSuccess("");

  };

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      {loading ? (
        <div className="loading-box">
          <p>Loading...</p>
          {/* <img src={"https://loading.io/asset/302387"} alt="loading" /> */}
          <FaSpinner
            size={50}
            style={{ color: "White" }}
            className="loading-spinner"
          />
        </div>
      ) : (
        <div className="project-container">
          {error && <ErrorMsg errText={error} closeError={closeErrorSuccess} reload={true}  className={"90vw"} />}
          {projectData.map((val, ind) => {
            return (
              <WorkCard
                key={ind}
                thumbnail={val.thumbnail}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                projectId={val._id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Work;
