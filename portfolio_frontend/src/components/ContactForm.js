import "../css/FormStyle.css";

import React, { useState } from "react";
import SuccessMsg from "./SuccessMsg";
import ErrorMsg from "./ErrorMsg";
import { useNavigate } from "react-router-dom";
import { makePOSTRequest } from "../utils/serverHerlper";

const Form = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, name, message };
      const response = await makePOSTRequest("/contact/send-email", data);
      if (response.err) {
        setError(response.err);
      } else {
        // setSuccess("Your details have been successfully submitted.");
        setSuccess(response.message);
        setTimeout(() => {
          setSuccess("");
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      setError("Error submitting form");
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
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="abc@abc.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
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
      <button className="btn">Submit</button>
      {success && (
        <SuccessMsg successText={success} closeSuccess={closeErrorSuccess} />
      )}
      {error && <ErrorMsg errText={error} closeError={closeErrorSuccess} />}
    </form>
  );
};

export default Form;
