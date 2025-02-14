import React from "react";
import Main from "../Main/Main";
import questionImg from "../../assets/question.png";
import classes from "./HeroQuestions.module.css";

const HeroQuestions = () => {
  return (
    <Main>
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
    </Main>
  );
};

export default HeroQuestions;
