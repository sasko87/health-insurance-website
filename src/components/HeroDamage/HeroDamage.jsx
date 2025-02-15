import React from "react";
import classes from "./HeroDamage.module.css";
import heroImg from "../../assets/healthy-heart.jpg";

const HeroDamage = () => {
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
        <h2>Треба да пријавите штетен настан?</h2>
        <p>
          Сега не треба да одите до осигурителната компанија за да го направите
          тоа. Се што треба да направите е да ја пополните формата подолу и да
          ја прикачите потребната документација, а брокерите ќе се погрижат за
          се останато
        </p>
      </div>
      <div className={classes.heroImg}>
        <img src={heroImg} alt="Контактирајте не" />
      </div>
    </main>
  );
};

export default HeroDamage;
