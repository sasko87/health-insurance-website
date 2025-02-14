import React from "react";
import Advantages from "../components/Advantages/Advantages";
import Features from "../components/Features/Features";
import FeaturesCard from "../components/FeaturesCard/FeaturesCard";
import Hero from "../components/Hero/Hero";
import LpPosts from "../components/LpPosts/LpPosts";
import Partners from "../components/Partners/Partners";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesCard />
      <Advantages />
      <Partners />
      <LpPosts />
    </>
  );
};

export default Homepage;
