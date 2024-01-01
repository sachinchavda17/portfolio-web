import "../css/ErrorMsgStyle.css";
import React from "react";
import { FaTimes } from "react-icons/fa";

const ErrorMsg = ({ errText, closeError, reload, className }) => {
  const ReloadButton = () => {
    window.location.reload();
  }
  return (
    <div className="error-full" style={{ width: className }}>
      <div className="error-msg">
        <strong>{errText}</strong>
        <span>Please Try again !!</span>
      </div>
      {reload &&
        <span>
          <button className="reload-btn" onClick={() => window.location.reload()}>Reload</button>
        </span>
      }
      <span>
        <FaTimes size={20} className="error-close" onClick={closeError} />
      </span>
    </div>
  );
};

export default ErrorMsg;
