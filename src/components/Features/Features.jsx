import React from "react";
import CardHorisontal from "../CardHorisontal/CardHorisontal";
import familyImg from "../../assets/family-img.png";
import classes from "./Features.module.css";
import Card from "../Card/Card";

const Features = () => {
  return (
    <section className={classes.features}>
      <div className={classes.horizontalCards}>
        <CardHorisontal
          image={familyImg}
          text={"направете приватно здравствено и заштитете се"}
        />
        <CardHorisontal
          image={familyImg}
          text={"направете приватно здравствено и заштитете се"}
        />
        <CardHorisontal
          image={familyImg}
          text={"направете приватно здравствено и заштитете се"}
        />
      </div>
      <div className={classes.verticalCard}>
        <Card
          image={familyImg}
          title="osiguruvawe"
          description={"направете приватно здравствено и заштитете се"}
        />
        <Card
          image={familyImg}
          title="osiguruvawe"
          description={"направете приватно здравствено и заштитете се"}
          style={{ border: "none", background: "#CFA782" }}
        />
        <Card
          image={familyImg}
          title="osiguruvawe"
          description={"направете приватно здравствено и заштитете се"}
          style={{ border: "none", background: "#175846", color: "#F2F4EE" }}
        />
      </div>
    </section>
  );
};

export default Features;
