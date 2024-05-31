import "../css/FormStyle.css";
import "../css/Loading.css";
import React, { useState } from "react";
import SuccessMsg from "./SuccessMsg";
import ErrorMsg from "./ErrorMsg";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { makePOSTRequest } from "../utils/serverHerlper";

const Form = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = { email, name, message };
      if (!data.email || !data.name || !data.message) {
        setError("Please fill all the field!");
        return;
      }
      const response = await makePOSTRequest("/contact/send-email", data);
      if (response.err) {
        setError(response.err);
      } else {
        setSuccess(response.message);
        setTimeout(() => {
          setSuccess("");
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      setError("Error submitting form");
    } finally {
      setLoading(false);
    }
  };
  const closeErrorSuccess = () => {
    setError("");
    setSuccess("");
  };

  return (
    <form className="form" method="post" onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        name="email"
        placeholder="abc@abc.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="msg">Message</label>
      <textarea
        name="msg"
        id=""
        rows="3"
        placeholder="Type Your Message here."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      {success && (
        <SuccessMsg successText={success} closeSuccess={closeErrorSuccess} />
      )}
      {error && <ErrorMsg errText={error} closeError={closeErrorSuccess} />}

      <button className="btn" disabled={loading}>
        {loading ? (
          <div className="loading-btn">
            <FaSpinner
              size={30}
              style={{ color: "White" }}
              className="loading-spinner"
            />
          </div>
        ) : (
          "Send Email"
        )}
      </button>
    </form>
  );
};

export default Form;
