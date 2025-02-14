import React from "react";
import classes from "./FeaturesCard.module.css";
import Card from "../Card/Card";
import familyImg from "../../assets/family-img.png";

const FeaturesCard = () => {
  return (
    <section className={classes.featuresCard}>
      <Card
        cardCenter
        image={familyImg}
        title="Пристап до здравствени услуги"
        description={
          "Приватното здравствено осигурување овозможува побрз преглед и третман, без долги чекања."
        }
      />
      <Card
        cardCenter
        image={familyImg}
        title="Посебна грижа и внимание"
        description={
          "Осигурениците добиваат персонализирана грижа и можност за избор на доктори и клиники."
        }
      />
      <Card
        cardCenter
        image={familyImg}
        title="Широк спектар на покриени услуги"
        description={
          "Приватното осигурување често вклучува и дополнителни услуги, како стоматолошки прегледи и дијагностички тестови."
        }
      />
      <Card
        cardCenter
        image={familyImg}
        title="Финансиска сигурност"
        description={
          "Покривањето на медицински трошоци го намалува ризикот од неочекувани големи финансиски издатоци."
        }
      />
    </section>
  );
};

export default FeaturesCard;
