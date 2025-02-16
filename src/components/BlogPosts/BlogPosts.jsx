import React from "react";
import BlogPostCard from "../BlogPostCard/BlogPostCard";
import classes from "./BlogPosts.module.css";
import { posts } from "../../data/blog";

const BlogPosts = () => {
  return (
    <section className={classes.blogPosts}>
      {posts.map((post) => (
        <BlogPostCard data={post} className="blogPostCard" />
      ))}
      ;
    </section>
  );
};

export default BlogPosts;
