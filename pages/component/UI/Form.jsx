import React from "react";
import classes from "../../../styles/form.module.css";
export default function Form() {
  return (
    <form className={`${classes.form}`}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className={`${classes.main__btn}`} type="submit">
        Send
      </button>
    </form>
  );
}
