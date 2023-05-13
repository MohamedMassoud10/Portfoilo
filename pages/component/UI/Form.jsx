import React from "react";

import classes from "../../../styles/form.module.css";
export default function Form() {
  let [values, setvalues] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  let { name, email, message } = values;

  let handleChange = (e) =>
    setvalues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/contact"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        };
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className={`${classes.form}`} onSubmit={handleSubmit}>
      <div className={`${classes.form__group}`}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Message"
          required
          value={message}
          onChange={handleChange}
        />
      </div>

      <button className={`${classes.main__btn}`} type="submit">
        Send
      </button>
    </form>
  );
}
