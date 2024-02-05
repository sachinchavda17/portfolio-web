import React, { useContext, useEffect, useState } from "react";
import "../css/SingleProjectEdit.css";
import { makeGETRequest, makePOSTRequest } from "../utils/serverHerlper";
import { useParams, useNavigate } from "react-router-dom";
import UploadWidget from "./UploadWidget";
import ErrorMsg from "./ErrorMsg";
import SuccessMsg from "./SuccessMsg";
import openModalContext from "../context/openModalContext";
import { FaSpinner } from "react-icons/fa";

const SingleProjectEdit = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [view, setView] = useState("");
  const [source, setSource] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [oneProject, setOneProject] = useState([]);
  const { projectId } = useParams();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { setOpenModal } = useContext(openModalContext);
  const [loading, setLoading] = useState(null);
  const [loadingUpdate, setLoadingUpdate] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(null);

  const closeErrorSuccess = () => {
    setError("");
    setSuccess("");
  };

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await makeGETRequest(
          "/project/get/singleproject/" + projectId
        );
        setOneProject(response.data);
      } catch (err) {
        setError("Error fetching project data");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [projectId]);

  const item = oneProject[0] || {};

  const submitProject = async () => {
    try {
      setLoadingUpdate(true);
      const data = {
        title: title,
        thumbnail: imgUrl,
        text: text,
        view: view,
        source: source,
      };

      if (data.title === "") {
        data.title = item.title || "";
      }
      if (data.text === "") {
        data.text = item.text || "";
      }
      if (data.thumbnail === "") {
        data.thumbnail = item.thumbnail || "";
      }
      if (data.source === "") {
        data.source = item.source || "";
      }
      if (data.view === "") {
        data.view = item.view || "";
      }

      const response = await makePOSTRequest(
        "/project/update/" + projectId,
        data
      );

      if (response.err) {
        setError("Could not update Project");
      } else {
        setSuccess("Project Updated.");
        setTimeout(() => {
          setSuccess("");
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      setError("Could not update Project");
    } finally {
      setLoadingUpdate(false);
    }
  };

  const deleteProject = async () => {
    try {
      setLoadingDelete(true);
      await makeGETRequest("/project/delete/" + projectId);
      setSuccess("Project deleted successfully");
      setTimeout(() => {
        setSuccess("");
        setOpenModal(false);
        navigate("/");
      }, 2000);
    } catch (err) {
      setError("Could not delete Project");
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <div className="upload-container">
      {loading ? (
        <div className="loading-box">
          <FaSpinner
            size={50}
            style={{ color: "White" }}
            className="loading-spinner"
          />
        </div>
      ) : (
        <div className="form">
          <label htmlFor="title">Edit Title </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title === "" ? item.title || "" : title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="thumbnail">Edit Thumbnail </label>
          <label htmlFor="">{uploadedFileName} </label>
          <img
            src={item.thumbnail}
            alt={item.thumbnail}
            className="thumbnail-img"
          />
          <UploadWidget setUrl={setImgUrl} setName={setUploadedFileName} />
          <label htmlFor="view">Edit View Url </label>
          <input
            type="text"
            name="view"
            placeholder="Website url paste here"
            value={view === "" ? item.view || "" : view}
            onChange={(e) => setView(e.target.value)}
          />

          {/* <label htmlFor="lang">Language In Project </label>
        <input
          type="text"
          name="lang"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        /> */}
          <label htmlFor="source">Edit Source Url </label>
          <input
            type="text"
            name="source"
            value={source === "" ? item.source || "" : source}
            onChange={(e) => setSource(e.target.value)}
          />
          <label htmlFor="text">Edit Text </label>
          <textarea
            name="text"
            rows="3"
            value={text === "" ? item.text || "" : text}
            onChange={(e) => setText(e.target.value)}
          />
          {error && <ErrorMsg errText={error} closeError={closeErrorSuccess} />}
          {success && (
            <SuccessMsg
              successText={success}
              closeSuccess={closeErrorSuccess}
            />
          )}
          <div className="edit-btns">
            <button
              type="submit"
              className="btn"
              onClick={submitProject}
              disabled={loadingUpdate}
            >
              {loadingUpdate ? (
                <div className="loading-btn">
                  <FaSpinner
                    size={30}
                    style={{ color: "White" }}
                    className="loading-spinner"
                  />
                </div>
              ) : (
                "Update"
              )}
            </button>
            <button
              type="delete"
              className="btn"
              onClick={deleteProject}
              disabled={loadingDelete}
            >
              {loadingDelete ? (
                <div className="loading-btn">
                  <FaSpinner
                    size={30}
                    style={{ color: "White" }}
                    className="loading-spinner"
                  />
                </div>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProjectEdit;
