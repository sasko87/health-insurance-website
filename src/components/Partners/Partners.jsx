import React from "react";
import classes from "./Partners.module.css";
import Croatia from "../../assets/Partners/CROATIA.png";
import Elink from "../../assets/Partners/elink.png";
import Omn from "../../assets/Partners/osiguruvanje-makedonija.png";
import Sava from "../../assets/Partners/sava.png";

const Partners = () => {
  return (
    <section className={classes.partners}>
      <img src={Croatia} alt="" className={classes.partnersLogo} />
      <img src={Elink} alt="" className={classes.partnersLogo} />
      <img src={Omn} alt="" className={classes.partnersLogo} />
      <img src={Sava} alt="" className={classes.partnersLogo} />
    </section>
  );
};

export default Partners;
