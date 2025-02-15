import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../assets/family-hero.png";
import Button from "../Button/Button";
import plantImg from "../../assets/plant.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const buttonNavigate = (e) => {
    e.preventDefault();
    navigate("/kontakt");
  };

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
      <div className={classes.heroLeft}>
        <img src={heroImg} alt="Семејство" className={classes.heroImg} />
      </div>
      <div className={classes.titles}>
        <h1>Вложете во вашето здравје денес, за безгрижно утре</h1>
        <p>
          Приватното здравствено осигурување е паметна одлука која носи многу
          придобивки. Добијте понуда дизајнирана за вашите потреби.
        </p>
        <div className={classes.buttonContainer}>
          <Button
            main={false}
            style={{ marginTop: 20 }}
            onClick={buttonNavigate}
          >
            Закажи состанок
          </Button>
        </div>

        <img src={plantImg} alt="растение" className={classes.plant} />
      </div>
    </main>
  );
};

export default Hero;
