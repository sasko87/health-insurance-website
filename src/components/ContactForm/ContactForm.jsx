import React, { useState } from "react";
import Input from "../Input/Input";
import classes from "./ContactForm.module.css";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";

const ContactForm = ({ damage }) => {
  const [isActive, setIsActive] = useState("");
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value, //go zima imeto od inputot
    }));
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append("fullName", data.fullName);
  formData.append("phone", data.phone);
  formData.append("email", data.email);
  formData.append("message", data.message);
  if (file) {
    formData.append("file", file); // Append the selected file
  }

  const handleType = (type) => {
    setIsActive(type);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",

        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
        setFile(null);
      }
    } catch (error) {
      const errorData = await response.json();
      setErrorMessage(errorData.error);
    }
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
        <Input
          type="text"
          name="fullName"
          id="name"
          placeholder="Име"
          value={data.fullName}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          name="phone"
          id="phone"
          placeholder="Телефонски број"
          value={data.phone}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={data.email}
          onChange={handleInputChange}
        />
        <Textarea
          placeholder="Твоја порака"
          name="message"
          value={data.message}
          onChange={handleInputChange}
        />
        {damage && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <p>Прикачи документ</p>
            <span>
              <label htmlFor="atached" className={classes.attachLabel}>
                Прикачи
              </label>
              {file ? (
                <span style={{ marginLeft: 10 }}>Прикачивте документ </span>
              ) : (
                ""
              )}
              <input
                type="file"
                id="atached"
                name="atached"
                className={classes.attachedFiles}
                onChange={handleFileChange}
              />
            </span>
          </div>
        )}
        {successMessage && (
          <p
            style={{
              textAlign: "center",
              marginTop: 5,
              fontSize: "20px",
              color: "#205346",
            }}
          >
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p
            style={{
              textAlign: "center",
              marginTop: 5,
              fontSize: "20px",
              color: "red",
            }}
          >
            {errorMessage}
          </p>
        )}
        <Button
          style={{ width: "30%", alignSelf: "flex-end" }}
          onClick={handleSendMessage}
        >
          Прати
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
