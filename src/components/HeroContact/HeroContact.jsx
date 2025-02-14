import React from "react";
import Main from "../Main/Main";
import classes from "./HeroContact.module.css";
import contactImg from "../../assets/contact-us.png";

const HeroContact = () => {
  return (
    <Main>
      <div className={classes.titles}>
        <h2>Контактирајте не</h2>
        <p>
          Доколку имате прашања или ви е потребна дополнителна информација за
          нашите полиси за приватно здравствено осигурување, слободно
          контактирајте не. Нашиот тим е секогаш подготвен да ви помогне да го
          изберете најдоброто решение според вашите потреби. Можете да ни пишете
          преку формуларот на оваа страница или да не контактирате на нашата
          е-пошта или телефон. Осигурете ја вашата иднина со полиса која ќе ве
          заштити и ќе ви овозможи сигурност во секојдневниот живот. Ние се
          грижиме за вашето здравје и благосостојба.
        </p>
      </div>
      <div className={classes.heroImg}>
        <img src={contactImg} alt="Контактирајте не" />
      </div>
    </Main>
  );
};

export default HeroContact;
