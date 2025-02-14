import React from "react";
import Main from "../Main/Main";
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
    <Main>
      <div className={classes.heroLeft}>
        <img src={heroImg} alt="Семејство" className={classes.heroImg} />
      </div>
      <div className={classes.titles}>
        <h1>Вложете во вашето здравје денес, за безгрижно утре</h1>
        <p>
          Приватното здравствено осигурување е паметна одлука која носи многу
          придобивки. Дознајте ги нашите разновидни понуди за приватно
          здравствено осигурување кои се дизајнирани за вашите потреби.
        </p>

        <Button main={false} style={{ marginTop: 20 }} onClick={buttonNavigate}>
          Закажи состанок
        </Button>

        <img src={plantImg} alt="растение" className={classes.plant} />
      </div>
    </Main>
  );
};

export default Hero;
