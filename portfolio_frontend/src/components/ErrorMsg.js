import "../css/ErrorMsgStyle.css";
import React from "react";
import { FaTimes } from "react-icons/fa";

const ErrorMsg = ({ errText, closeError }) => {
  return (
    <div className="error-full">
      <div className="error-msg">
        <strong>{errText}</strong>
        <span>Please Try again !!</span>
      </div>
      <span>
        <FaTimes size={20} className="error-close" onClick={closeError} />
      </span>
    </div>
  );
};

export default ErrorMsg;
