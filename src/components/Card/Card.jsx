import React from "react";
import classes from "./Card.module.css";
import Button from "../Button/Button";

const Card = ({ image, title, description, cardCenter, ...props }) => {
  return (
    <div className={cardCenter ? classes.cardCenter : classes.card} {...props}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
