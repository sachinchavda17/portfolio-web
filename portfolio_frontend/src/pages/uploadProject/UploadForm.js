import React, { useState } from "react";
import "../../css/FormStyle.css";
import { makePOSTRequest } from "../../utils/serverHerlper";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";
import SuccessMsg from "../../components/SuccessMsg";
import { FaSpinner } from "react-icons/fa";
import ThumnailsHandle from "../../components/ThumnailsHandle";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [view, setView] = useState("");
  const [source, setSource] = useState("");
  const [imgUrls, setImgUrls] = useState(
    ["https://res.cloudinary.com/dbm00gxt1/image/upload/v1707214230/xscspg4gdvkminmcpvyq.jpg"]
  );
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(null);
  const [usedLang, setUsedLang] = useState([]);

  const handleAddLang = () => {
    setUsedLang([...usedLang, ""]);
  };

  const handleRemoveLang = (index) => {
    setUsedLang(usedLang.filter((lang, i) => i !== index));
  };

  const submitProject = async () => {
    try {
      setLoading(true);
      const data = { title, thumbnails: imgUrls, text, view, source, usedLang };
      if (
        !data.title ||
        data.thumbnails.length === 0 ||
        !data.text ||
        !data.view ||
        !data.source ||
        !data.usedLang
      ) {
        setError("All fields are required!");
        return;
      }
      const response = await makePOSTRequest("/project/create", data);
      if (response.err) {
        setError("Could not create Project" + response.err);
      } else {
        setSuccess("Project created successfully");
        setTimeout(() => {
          setSuccess("");
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      setError("Could not create Project");
    } finally {
      setLoading(false);
    }
  };

  const closeErrorSuccess = () => {
    setSuccess("");
    setError("");
  };


  return (
    <div className="upload-container">
      <div className="form">
        <label htmlFor="title">Project Title </label>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="thumbnail">Thumbnails </label>
        <ThumnailsHandle
          thumbnails={imgUrls}
          setThumbnails={setImgUrls}
          setUploadedFileName={""}
        />
        <label htmlFor="view">View Url </label>
        <input
          type="text"
          name="view"
          placeholder="Website url paste here"
          value={view}
          onChange={(e) => {
            setView(e.target.value);
          }}
        />

        <label htmlFor="source">Source Url </label>
        <input
          type="text"
          name="source"
          placeholder="Github or Source url paste here "
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />

        <label htmlFor="text">Text </label>
        <textarea
          name="text"
          rows="3"
          value={text}
          placeholder="About Project"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <label htmlFor="lang">Languages Used:</label>
        <div className="lang-list">
          {usedLang.map((lang, index) => (
            <div className="lang-item" key={index}>
              <input
                type="text"
                name={`lang${index}`}
                value={lang}
                onChange={(e) =>
                  setUsedLang((prevLangs) =>
                    prevLangs.map((l, i) => (i === index ? e.target.value : l))
                  )
                }
              />
              <button type="button" onClick={() => handleRemoveLang(index)}>
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            className="add-lang-button"
            onClick={handleAddLang}
          >
            +
          </button>
        </div>
        {error && <ErrorMsg errText={error} closeError={closeErrorSuccess} />}
        {success && (
          <SuccessMsg successText={success} closeSuccess={closeErrorSuccess} />
        )}
        <button
          type="submit"
          className="btn"
          onClick={submitProject}
          disabled={loading}
        >
          {loading ? (
            <div className="loading-btn">
              <FaSpinner
                size={30}
                style={{ color: "White" }}
                className="loading-spinner"
              />
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
