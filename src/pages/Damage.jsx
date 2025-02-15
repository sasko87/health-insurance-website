import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import HeroDamage from "../components/HeroDamage/HeroDamage";

const Damage = () => {
  return (
    <>
      <HeroDamage />
      <ContactForm damage />
    </>
  );
};

export default Damage;
