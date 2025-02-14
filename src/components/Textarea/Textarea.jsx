import React from "react";
import classes from "./Textarea.module.css";

const Textarea = ({ placeholder }) => {
  return <textarea className={classes.textarea} placeholder={placeholder} />;
};

export default Textarea;
