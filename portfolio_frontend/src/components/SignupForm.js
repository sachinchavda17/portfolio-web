import React, { useEffect, useState } from "react";
import "../css/LoginFormStyle.css";
import { FaEye, FaEyeSlash, FaSmile, FaTimes } from "react-icons/fa";
import { makePOSTRequest } from "../utils/serverHerlper";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ErrorMsg from "./ErrorMsg";
import PasswordInput from "./PasswordInput";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [cookie, setCookie] = useCookies(["email"]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = { email, password, username, confirmPassword };
      if (password !== confirmPassword) {
        setError("Passwords does not match!");
        return;
      }
      const response = await makePOSTRequest("/auth/register", data);
      if (response.err) {
        setError(response.err);
        return;
      }
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 30 * 60 * 1000);

      setCookie("email", encodeEmail(email), {
        path: "/",
        expires: expirationDate,
      });
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  };
  const closeError = () => {
    setError("");
  };
  const closeSignup = () => {
    closeError();
    navigate("/");
  };
  const handleInputChange = () => {
    closeError();
  };

  const encodeEmail = (email) => {
    return email
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 2))
      .join("");
  };
  // const decodeEmail = (encodedEmail) => {
  //   return encodedEmail.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 2)).join('');
  // };

  return (
    <div>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div className="not-login">
          <div className="first-para">
            You Don't need to create account. only admin can login for upload
            new project.
          </div>
          <div>
            Thank you. <FaSmile style={{ fontSize: "20px", color: "yellow" }} />
          </div>
          <Link to={"/"} className="btn go-back-home">
            Go Back to Home{" "}
          </Link>
        </div>
      </div>
      {/* <div className="modal-container">
        <div>
          <FaTimes size={30} onClick={closeSignup} className="close-menu" />
        </div>
        <div className="login-container">
          <h1 className="heading-name">
            <span>Sign Up</span>
          </h1>
          <div className="login-form" action="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter your Username"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                handleInputChange();
              }}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleInputChange();
              }}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />

            <PasswordInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirm Password"
            />

            {error && <ErrorMsg errText={error} closeError={closeError} />}

            <button type="submit" className="btn" onClick={handleLogin}>
              Sign Up
            </button>
          </div>
          <div className="additional">
            Already Have an Account?
            {
              <Link to={"/login"}>
                <span>Log In</span>
              </Link>
            }
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SignupForm;
