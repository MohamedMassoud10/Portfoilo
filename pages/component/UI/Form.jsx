import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../../styles/form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to the server
      await axios.post("/api/sendMessage", { name, email, message, subject });
      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      setSubmitStatus("error");
      console.error(error);
    }

    setIsSubmitting(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    let timeout;
    if (submitStatus === "success") {
      timeout = setTimeout(() => {
        setSubmitStatus(null);
      }, 10000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [submitStatus]);

  return (
    <div>
      <h1>Contact Form</h1>
      {submitStatus === "success" && (
        <p className={classes.successfullySend}>Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className={classes.faildSend}>
          Failed to send message. Please try again later.
        </p>
      )}
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form__group}>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Subject"
          />
        </div>
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
            onKeyPress={handleKeyPress}
          />
        </div>

        <button
          className={`${classes.main__btn} ${
            isSubmitting ? classes.main__btn__loading : ""
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
