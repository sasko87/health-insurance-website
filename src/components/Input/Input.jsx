import React from "react";
import classes from "./Input.module.css";

const Input = ({ id, name, placeholder, label, type, ...props }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
        className={classes.input}
      />
    </>
  );
};

export default Input;
