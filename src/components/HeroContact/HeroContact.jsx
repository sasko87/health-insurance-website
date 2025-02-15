import React from "react";
import Main from "../Main/Main";
import classes from "./HeroContact.module.css";
import contactImg from "../../assets/contact-us.png";

const HeroContact = () => {
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
        <h2>Контактирајте не</h2>
        <p>
          Доколку имате прашања или ви е потребна дополнителна информација за
          нашите полиси за приватно здравствено осигурување, слободно
          контактирајте не. Нашиот тим е секогаш подготвен да ви помогне да го
          изберете најдоброто решение според вашите потреби. Осигурете ја вашата
          иднина со полиса која ќе ве заштити и ќе ви овозможи сигурност во
          секојдневниот живот. Ние се грижиме за вашето здравје и благосостојба.
        </p>
      </div>
      <div className={classes.heroImg}>
        <img src={contactImg} alt="Контактирајте не" />
      </div>
    </main>
  );
};

export default HeroContact;
