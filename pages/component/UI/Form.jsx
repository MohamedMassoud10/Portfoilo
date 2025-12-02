import React, { useState, useEffect } from "react";
import classes from "../../../styles/form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      subject.trim() !== "" &&
      message.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setSubmitStatus("error");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send form data to the server
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, subject }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      setSubmitStatus("error");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
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
        <p className={classes.successfullySend} role="alert" aria-live="polite">
          Message sent successfully!
        </p>
      )}
      {submitStatus === "error" && (
        <p className={classes.faildSend} role="alert" aria-live="assertive">
          Failed to send message. Please make sure all fields are filled.
        </p>
      )}
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <div className={classes.form__group}>
          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Subject"
            aria-label="Message subject"
            aria-required="true"
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Your Name"
            aria-label="Your name"
            aria-required="true"
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
            aria-label="Your email address"
            aria-required="true"
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Write Your Message"
            onKeyPress={handleKeyPress}
            aria-label="Your message"
            aria-required="true"
            rows="5"
          />
        </div>

        <button
          className={`${classes.main__btn} ${
            isSubmitting ? classes.main__btn__loading : ""
          }`}
          type="submit"
          disabled={isSubmitting || !isFormValid()}
          aria-label={isSubmitting ? "Sending message" : "Send message"}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
