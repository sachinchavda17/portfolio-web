import React, { useContext, useEffect, useState } from "react";
import "../css/SingleProjectEdit.css";
import { makeGETRequest, makePOSTRequest } from "../utils/serverHerlper";
import { useParams, useNavigate } from "react-router-dom";
import UploadWidget from "./UploadWidget";
import ErrorMsg from "./ErrorMsg";
import SuccessMsg from "./SuccessMsg";
import openModalContext from "../context/openModalContext";
import { FaDumpster, FaSpinner } from "react-icons/fa";
import ConfirmModal from "./ConfirmModal";

const SingleProjectEdit = () => {
  // State variables
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [view, setView] = useState("");
  const [source, setSource] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [oneProject, setOneProject] = useState([]);
  const [usedLang, setUsedLang] = useState([]);
  const { projectId } = useParams();
  const [thumbnailsForThis, setThumbnailForThis] = useState([])

   // Error and success messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Context
  const { setOpenModal } = useContext(openModalContext);

  // Loading states
  const [loading, setLoading] = useState(null);
  const [loadingUpdate, setLoadingUpdate] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(null);

  // Confirmation modal state
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const closeErrorSuccess = () => {
    setError("");
    setSuccess("");
  };

  // Add a language to the list
  const handleAddLang = () => {
    setUsedLang([...usedLang, ""]);
  };

  // Remove a language from the list
  const handleRemoveLang = (index) => {
    setUsedLang(usedLang.filter((lang, i) => i !== index));
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
        if (response.data.length > 0 && response.data[0].usedLang) {
          setUsedLang(response.data[0].usedLang);
        }
        if (response.data.length > 0 && response.data[0].thumbnails) {
          setThumbnailForThis(response.data[0].thumbnails)
        }
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
        title: title.trim() || item.title || "",
        thumbnails: thumbnailsForThis.length > 0 ? thumbnailsForThis.filter(url => url.trim() !== "") : item.usedLang || [] || item.thumbnails || "",
        text: text.trim() || item.text || "",
        view: view.trim() || item.view || "",
        source: source.trim() || item.source || "",
        usedLang: usedLang.length > 0 ? usedLang.filter(lang => lang.trim() !== "") : item.usedLang || [],
      };

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
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
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
  const cancelDelete = () => {
    setShowConfirmModal(false);
  };

  const handleImgDelete = (index) => {
    const updatedThumbnails = [...thumbnailsForThis];
    updatedThumbnails.splice(index, 1);
    // setOneProject({ ...item, thumbnails: updatedThumbnails });
    setThumbnailForThis(updatedThumbnails)
  };

  const handleImgUpload = (url) => {
    // const updatedThumbnails = [...item.thumbnails, url];
    const updatedThumbnails = [...thumbnailsForThis, url];
    // setOneProject({ ...item, thumbnails: updatedThumbnails });
    setThumbnailForThis(updatedThumbnails)
  };

  console.log("item ", item.thumbnails)

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
        <>
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

            {thumbnailsForThis && (
              <div className="project-edit-img-container">
                {thumbnailsForThis.map((url, index) => (
                  <div className="edit-img-container" key={index}>
                    <img src={url} alt={url} className="thumbnail-img" />
                    <div className="edit-delete-btn" onClick={() => handleImgDelete(index)}><FaDumpster /></div>
                  </div>
                ))}
              </div>
            )}
            {/* <img src={item.thumbnails[0]} className="thumbnail-img" /> */}

            <UploadWidget setUrl={(url) => {
              setImgUrl(url);
              handleImgUpload(url);
            }} setName={setUploadedFileName} />
            <label htmlFor="view">Edit View Url </label>
            <input
              type="text"
              name="view"
              placeholder="Website url paste here"
              value={view === "" ? item.view || "" : view}
              onChange={(e) => setView(e.target.value)}
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
                        prevLangs.map((l, i) =>
                          i === index ? e.target.value : l
                        )
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
                style={{ backgroundColor: "#28a745" }}
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
                style={{ backgroundColor: "red" }}
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
          {showConfirmModal && (
            <ConfirmModal
              message="Are you sure you want to delete this project?"
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
              setShowConfirmModal={setShowConfirmModal}
            />
          )}
        </>
      )
      }
    </div >
  );
};

export default SingleProjectEdit;
