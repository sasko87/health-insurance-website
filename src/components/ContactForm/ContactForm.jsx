import React, { useState } from "react";
import Input from "../Input/Input";
import classes from "./ContactForm.module.css";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";

const ContactForm = ({ damage }) => {
  const [isActive, setIsActive] = useState("");

  const handleType = (type) => {
    setIsActive(type);
  };
  return (
    <section className={classes.contact}>
      <form className={classes.form}>
        {damage && (
          <div className={classes.submitter}>
            <label
              htmlFor="fizicko"
              className={
                isActive === "fizicko" ? classes.submitterActiveLabel : ""
              }
            >
              Физичко Лице
            </label>
            <input
              type="radio"
              id="fizicko"
              name="fizicko"
              value="fizicko"
              className={classes.radio}
              onClick={(e) => handleType(e.target.value)}
              o
            />

            <label
              htmlFor="pravno"
              className={
                isActive === "pravno" ? classes.submitterActiveLabel : ""
              }
            >
              Правно Лице
            </label>
            <input
              type="radio"
              id="pravno"
              name="fizicko"
              value="pravno"
              className={classes.radio}
              onClick={(e) => handleType(e.target.value)}
            />
          </div>
        )}
        <Input type="text" name="name" id="name" placeholder="Име" />
        <Input
          type="number"
          name="number"
          id="number"
          placeholder="Телефонски број"
        />
        <Input type="email" name="email" id="email" placeholder="E-mail" />
        <Textarea placeholder="Твоја порака" />
        {damage && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <p>Прикачи документ</p>
            <span>
              <label htmlFor="atached" className={classes.attachLabel}>
                Прикачи
              </label>
              <input
                type="file"
                id="atached"
                name="atached"
                className={classes.attachedFiles}
              />
            </span>
          </div>
        )}
        <Button style={{ width: "30%", alignSelf: "flex-end" }}>Прати</Button>
      </form>
    </section>
  );
};

export default ContactForm;
