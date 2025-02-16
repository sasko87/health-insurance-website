const express = require("express");
const app = express();
const { contactMail } = require("./handlers/mail");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/send-contact", contactMail);

const server = app.listen(3000, () => {
  console.log("server is up");
});
