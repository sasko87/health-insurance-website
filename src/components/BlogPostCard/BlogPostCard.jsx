import React from "react";
import { Link } from "react-router-dom";
import classes from "./BlogPostCard.module.css";
import { useNavigate } from "react-router-dom";

const BlogPostCard = ({ data, className }) => {
  const navigate = useNavigate();
  const handlePost = (id) => {
    navigate(`/blog/post/${id}`);
  };
  const textLength = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div
      className={classes[`${className}`]}
      onClick={() => handlePost(data.id)}
    >
      <div className={classes.imgContainer}>
        <img src={data.image} alt="" />
      </div>
      <div className={classes.titleContainer}>
        <h2>{data.title}</h2>
        <p>{textLength(data.content, 250)}</p>
      </div>
      <div className={classes.linkContainer}>
        <Link className={classes.link}>Прочитај повеќе</Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
