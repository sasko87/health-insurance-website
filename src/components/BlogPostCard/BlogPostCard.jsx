import React from "react";
import dentist from "../../assets/dentist.jpg";
import { Link } from "react-router-dom";
import classes from "./BlogPostCard.module.css";

const BlogPostCard = ({ data }) => {
  const textLength = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  console.log(data.image);
  return (
    <div className={classes.blogPostCard}>
      <div className={classes.imgContainer}>
        <img src={data.image} alt="" />
      </div>
      <div className={classes.titleContainer}>
        <h2>{data.title}</h2>
        <p>{textLength(data.content, 350)}</p>
      </div>
      <div className={classes.linkContainer}>
        <Link className={classes.link}>Прочитај повеќе</Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
