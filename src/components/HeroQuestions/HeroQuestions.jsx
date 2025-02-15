import React from "react";

import questionImg from "../../assets/question.png";
import classes from "./HeroQuestions.module.css";

const HeroQuestions = () => {
  return (
    <main className={classes.hero}>
      <div className={classes["custom-shape-divider-bottom-1739106416"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes["shape-fill"]}
          ></path>
        </svg>
      </div>

      <div className={classes.titles}>
        <h2>Имате прашања?</h2>
        <h3>Ние ќе одговориме на вашите прашања</h3>
        <p>
          Погледнете одговори на некои од најчесто поставуваните прашања. околку
          не го пронајдете одговорот што го барате, слободно контактирајте нѐ, и
          ние со задоволство ќе ви помогнеме.
        </p>
      </div>
      <div className={classes.heroImg}>
        <img src={questionImg} />
      </div>
    </main>
  );
};

export default HeroQuestions;
