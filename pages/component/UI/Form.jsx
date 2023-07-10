import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../../styles/form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to the server
      await axios.post("/api/sendMessage", { name, email, message });
      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSubmitStatus("error");
      console.error(error);
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    let timeout;
    if (submitStatus === "success") {
      timeout = setTimeout(() => {
        setSubmitStatus(null);
      }, 60000); // 1 minute in milliseconds
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [submitStatus]);

  return (
    <div>
      <h1>Contact Form</h1>
      {submitStatus === "success" && <p>Message sent successfully!</p>}
      {submitStatus === "error" && (
        <p>Failed to send message. Please try again later.</p>
      )}
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form__group}>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Your Name"
          />
        </div>
        <div className={classes.form__group}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
          />
        </div>
        <div className={classes.form__group}>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Write Your Message"
          />
        </div>

        <button
          className={classes.main__btn}
          type="submit"
          disabled={isSubmitting}
        >
          Send
        </button>
      </form>
    </div>
  );
}
