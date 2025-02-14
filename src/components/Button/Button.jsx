import React from "react";
import classes from "./Button.module.css";

const Button = ({ main = true, children, ...props }) => {
  return (
    <button
      className={main ? classes.mainButton : classes.secButton}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
