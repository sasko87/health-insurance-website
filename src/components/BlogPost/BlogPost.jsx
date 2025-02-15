import React from "react";
import { posts } from "../../data/blog.js";
import { useParams } from "react-router-dom";
import classes from "./BlogPost.module.css";

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((newPost) => newPost.id === id);
  console.log(posts.name);

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <section className={classes.blogPost}>
      <div className={classes.post}>
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} />
        <p>{post.content}</p>
      </div>
    </section>
  );
};

export default BlogPost;
