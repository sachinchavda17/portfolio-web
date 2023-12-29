// LoginForm.js
import React, { useEffect, useState } from "react";
import "../css/LoginFormStyle.css";
import { FaTimes } from "react-icons/fa";
import { makePOSTRequest } from "../utils/serverHerlper";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ErrorMsg from "./ErrorMsg";
import PasswordInput from "./PasswordInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["email"]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   document.body.style.overflowY = "hidden";
  //   return () => {
  //     document.body.style.overflowY = "scroll";
  //   };
  // }, []);

  const handleLogin = async () => {
    try {
      const data = { email, password };
      const response = await makePOSTRequest("/auth/login", data);
      if (response.err) {
        setError(response.err);
        return;
      }
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 30 * 60 * 1000);

      // const newEncodedEmail = encodeEmail(email) + mainEncodedEmail(email);
      setCookie("email", encodeEmail(email), {
        path: "/",
        expires: expirationDate,
      });
      // alert(response.message);
      navigate("/");
    } catch (error) {
      setError("An unexpected error occurred. Please try again."); // Set a generic error message
    }
  };

  const closeError = () => {
    setError(""); // Clear the error when closing
  };

  const closeLogin = () => {
    closeError(); // Close the error when closing the login form
    navigate("/");
  };
  const encodeEmail = (email) => {
    return email
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 6))
      .join("");
  };

  // const mainEncodedEmail = (email) => {
  //   return email
  //     .split("")
  //     .map((char) => String.fromCharCode(char.charCodeAt(0) + 5))
  //     .join("");
  // };

  return (
    <div>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div>
          <FaTimes size={30} onClick={closeLogin} className="close-menu" />
        </div>
        <div className="login-container">
          <h1 className="heading-name">
            <span>Login</span>
          </h1>
          <div className="login-form" action="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email "
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <ErrorMsg errText={error} closeError={closeError} />}
            <button type="submit" className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="additional">
            Don't have an account?
            <Link to={"/signup"}>
              <span>Create An Account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
