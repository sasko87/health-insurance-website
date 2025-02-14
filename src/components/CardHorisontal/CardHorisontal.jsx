import React from "react";
import classes from "./CardHorisontal.module.css";

const CardHorisontal = ({ image, text }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default CardHorisontal;
