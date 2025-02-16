import React from "react";
import classes from "./Textarea.module.css";

const Textarea = ({ placeholder, ...props }) => {
  return (
    <textarea
      className={classes.textarea}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;
