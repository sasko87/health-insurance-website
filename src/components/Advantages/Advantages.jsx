import React from "react";
import classes from "./Advantages.module.css";
import laboratory from "../../assets/laboratory.jpg";
import bloodPressure from "../../assets/blood-pressure.jpg";
import operation from "../../assets/operation.jpg";
import dentist from "../../assets/dentist.jpg";

const Advantages = () => {
  return (
    <section className={classes.advantages}>
      <div className={classes.advantagesContainer}>
        <div>
          <h2>Дијагностички тестови</h2>
          <p>
            Дијагностичките тестови за приватно здравствено осигурување
            овозможуваат рано откривање на здравствени состојби и превентивна
            грижа. Тие помагаат во прецизно утврдување на дијагнози, што
            овозможува побрз пристап до соодветни третмани и покривање на
            трошоците од осигурувањето.
          </p>
        </div>
        <div>
          <img src={bloodPressure} alt="" />
        </div>
      </div>
      <div className={classes.advantagesContainer}>
        <div>
          <img src={operation} alt="" />
        </div>
        <div>
          <h2>Хируршки интервенции</h2>
          <p>
            Хируршките интервенции во рамки на приватното здравствено
            осигурување обезбедуваат брз пристап до квалитетна медицинска грижа
            без долги листи на чекање. Осигурувањето покрива делумни или целосни
            трошоци за операцијата, хоспитализацијата и постоперативниот
            опоравок.
          </p>
        </div>
      </div>
      <div className={classes.advantagesContainer}>
        <div>
          <h2>Лекови и терапии</h2>
          <p>
            Приватното здравствено осигурување покрива трошоци за лекови и
            терапии, овозможувајќи пристап до неопходната медицинска нега без
            финансиски оптоварувања. Осигурениците можат да добијат попусти или
            целосна надокнада за препишани лекови и специјализирани терапии.
          </p>
        </div>
        <div>
          <img src={laboratory} alt="" />
        </div>
      </div>
      <div className={classes.advantagesContainer}>
        <div>
          <img src={dentist} alt="" />
        </div>
        <div>
          <h2>Стоматолошки услуги</h2>
          <p>
            Приватното здравствено осигурување покрива разни стоматолошки
            услуги, вклучувајќи превентивни прегледи, лекување на заби и
            протетика. Осигурениците добиваат финансиска поддршка за квалитетна
            стоматолошка нега без високи трошоци.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
