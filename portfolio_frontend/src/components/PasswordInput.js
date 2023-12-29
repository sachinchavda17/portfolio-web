import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/PasswordInputStyle.css";
const PasswordInput = ({ value, onChange, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-input">
      <label htmlFor="password" className="label">{label}</label>
      <div className="input-box" name="password">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={`Enter your ${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
          className="input"
        />
        {showPassword ? (
          <FaEyeSlash
            size={20}
            style={{ color: "white" }}
            className="password-eye"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FaEye
            size={20}
            style={{ color: "white" }}
            className="password-eye"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
