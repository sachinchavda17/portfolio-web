import React, { useEffect, useRef, useState } from "react";

const UploadWidget = ({ setUrl }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [originalFileName, setOriginalFileName] = useState("");

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dbm00gxt1",
        uploadPreset: "Portfolio",
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setOriginalFileName(result.info.original_filename);
          setSuccess("Image uploaded successfully");
          setError("");
        } else {
          if (error) {
            setError("Error uploading image");
            setSuccess("");
          }
        }
      }
    );
  }, [setUrl]);

  const openWidget = () => {
    widgetRef.current.open();
    setSuccess("");
    setError("");
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
    marginBottom: ".5rem ",
  };

  const btnStyle = {
    backgroundColor: "#3498DB",
    color: "white",
    borderRadius: "5px",
    padding: "7px 20px",
    marginBottom:".5rem",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
    boxShadow: "rgba(0, 0, 0, .2) 0 1px 3px 0 rgba(0, 0, 0, .1)",
  };

  return (
    <div>
      <div style={style}>
        <button onClick={openWidget} style={btnStyle}>
          Upload Image
        </button>
        {originalFileName && <p>Original File Name: {originalFileName}</p>}
      </div>
      {error && <div style={{color:"white", margin:".3rem 0"}}>{error}</div>}
      {success && <div style={{color:"white", margin:".3rem 0"}}>{success}</div>}
    </div>
  );
};

export default UploadWidget;
