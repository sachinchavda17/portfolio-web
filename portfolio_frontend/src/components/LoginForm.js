import React, { useEffect, useState } from "react";
import "../css/LoginFormStyle.css";
import { FaSpinner, FaTimes } from "react-icons/fa";
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
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const data = { email, password };
      const response = await makePOSTRequest("/auth/login", data);
      if (response.err) {
        setError(response.err);
        return;
      }
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);

      // const newEncodedEmail = encodeEmail(email) + mainEncodedEmail(email);
      setCookie("email", encodeEmail(email), {
        path: "/",
        expires: expirationDate,
      });
      // alert(response.message);
      navigate("/");
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeError = () => {
    setError("");
  };

  const closeLogin = () => {
    closeError();
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
      <div className="modal-wrapper">
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
              <button
                type="submit"
                className="btn"
                onClick={handleLogin}
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
                  "Login"
                )}
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
    </div>
  );
};

export default LoginForm;
