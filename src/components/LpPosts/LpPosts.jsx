import React from "react";
import Doctor from "../../assets/doctor.jpg";
import Capsuls from "../../assets/gel-capsules.jpg";
import Health from "../../assets/health.jpg";

import classes from "./LpPosts.module.css";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const LpPosts = () => {
  const posts = [
    {
      icon: Doctor,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare libero turpis, non commodo libero cursus maximus. Integer sagittis risus leo, eget rutrum risus lacinia at. Suspendisse aliquet ut purus eget rutrum. Curabitur et erat vel magna posuere congue. Praesent imperdiet felis vel neque consequat, a pulvinar tellus dapibus. Donec non consectetur est, quis auctor urna. Donec eget quam imperdiet, egestas tortor quis, venenatis massa. Quisque vehicula a erat vitae semper. Quisque eget sapien euismod dui condimentum ullamcorper sit amet aliquam magna. Donec in porta tortor. Morbi tincidunt nisi vel lectus facilisis, quis consectetur nisi iaculis. Fusce auctor pretium ex, nec mollis augue. Donec bibendum finibus dignissim. Nunc quis convallis nibh, eget condimentum leo. Maecenas in enim sed nibh congue consectetur sed aliquam erat. Vivamus risus quam, semper et tincidunt vel, vestibulum eget metus.",
    },
    {
      icon: Capsuls,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare libero turpis, non commodo libero cursus maximus. Integer sagittis risus leo, eget rutrum risus lacinia at. Suspendisse aliquet ut purus eget rutrum. Curabitur et erat vel magna posuere congue. Praesent imperdiet felis vel neque consequat, a pulvinar tellus dapibus. Donec non consectetur est, quis auctor urna. Donec eget quam imperdiet, egestas tortor quis, venenatis massa. Quisque vehicula a erat vitae semper. Quisque eget sapien euismod dui condimentum ullamcorper sit amet aliquam magna. Donec in porta tortor. Morbi tincidunt nisi vel lectus facilisis, quis consectetur nisi iaculis. Fusce auctor pretium ex, nec mollis augue. Donec bibendum finibus dignissim. Nunc quis convallis nibh, eget condimentum leo. Maecenas in enim sed nibh congue consectetur sed aliquam erat. Vivamus risus quam, semper et tincidunt vel, vestibulum eget metus.",
    },
    {
      icon: Health,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare libero turpis, non commodo libero cursus maximus. Integer sagittis risus leo, eget rutrum risus lacinia at. Suspendisse aliquet ut purus eget rutrum. Curabitur et erat vel magna posuere congue. Praesent imperdiet felis vel neque consequat, a pulvinar tellus dapibus. Donec non consectetur est, quis auctor urna. Donec eget quam imperdiet, egestas tortor quis, venenatis massa. Quisque vehicula a erat vitae semper. Quisque eget sapien euismod dui condimentum ullamcorper sit amet aliquam magna. Donec in porta tortor. Morbi tincidunt nisi vel lectus facilisis, quis consectetur nisi iaculis. Fusce auctor pretium ex, nec mollis augue. Donec bibendum finibus dignissim. Nunc quis convallis nibh, eget condimentum leo. Maecenas in enim sed nibh congue consectetur sed aliquam erat. Vivamus risus quam, semper et tincidunt vel, vestibulum eget metus.",
    },
    {
      icon: Doctor,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare libero turpis, non commodo libero cursus maximus. Integer sagittis risus leo, eget rutrum risus lacinia at. Suspendisse aliquet ut purus eget rutrum. Curabitur et erat vel magna posuere congue. Praesent imperdiet felis vel neque consequat, a pulvinar tellus dapibus. Donec non consectetur est, quis auctor urna. Donec eget quam imperdiet, egestas tortor quis, venenatis massa. Quisque vehicula a erat vitae semper. Quisque eget sapien euismod dui condimentum ullamcorper sit amet aliquam magna. Donec in porta tortor. Morbi tincidunt nisi vel lectus facilisis, quis consectetur nisi iaculis. Fusce auctor pretium ex, nec mollis augue. Donec bibendum finibus dignissim. Nunc quis convallis nibh, eget condimentum leo. Maecenas in enim sed nibh congue consectetur sed aliquam erat. Vivamus risus quam, semper et tincidunt vel, vestibulum eget metus.",
    },
    {
      icon: Health,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare libero turpis, non commodo libero cursus maximus. Integer sagittis risus leo, eget rutrum risus lacinia at. Suspendisse aliquet ut purus eget rutrum. Curabitur et erat vel magna posuere congue. Praesent imperdiet felis vel neque consequat, a pulvinar tellus dapibus. Donec non consectetur est, quis auctor urna. Donec eget quam imperdiet, egestas tortor quis, venenatis massa. Quisque vehicula a erat vitae semper. Quisque eget sapien euismod dui condimentum ullamcorper sit amet aliquam magna. Donec in porta tortor. Morbi tincidunt nisi vel lectus facilisis, quis consectetur nisi iaculis. Fusce auctor pretium ex, nec mollis augue. Donec bibendum finibus dignissim. Nunc quis convallis nibh, eget condimentum leo. Maecenas in enim sed nibh congue consectetur sed aliquam erat. Vivamus risus quam, semper et tincidunt vel, vestibulum eget metus.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(4);

  // const postsPerPage = 4;
  useEffect(() => {
    // Function to check screen width and adjust postsPerPage
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setPostsPerPage(4);
      } else if (window.innerWidth > 992 && window.innerWidth < 1200) {
        setPostsPerPage(3);
      } else if (window.innerWidth > 792 && window.innerWidth < 992) {
        setPostsPerPage(2);
      } else if (window.innerWidth < 600) {
        setPostsPerPage(1);
      }
    };

    // Initial check when component mounts
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleNext = () => {
    if (currentIndex + 1 < posts.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const textLength = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <>
      <section className={classes.lpPosts}>
        <h2 className={classes.lpPostsSectionHeader}>
          Најнови Вести и Промоции
        </h2>

        <div className={classes.carouselContainer}>
          <button
            className={classes.arrowCarousel}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>

          <div className={classes.carousel}>
            {posts
              .slice(currentIndex, currentIndex + postsPerPage)
              .map((post, index) => (
                <div key={index} className={classes.LpPostsContainer}>
                  <img src={post.icon} alt="" className={classes.postImage} />
                  <h2>{post.title}</h2>
                  <p>{textLength(post.content, 150)}</p>
                  <div style={{ textAlign: "center", marginTop: 40 }}></div>
                </div>
              ))}
          </div>

          <button
            className={classes.arrowCarousel}
            onClick={handleNext}
            disabled={currentIndex + postsPerPage >= posts.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default LpPosts;
