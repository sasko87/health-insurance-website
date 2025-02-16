const express = require("express");
const app = express();
const { contactMail } = require("./handlers/mail");
const { upload } = require("./handlers/storage");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/send-contact", upload.single("file"), contactMail);

const server = app.listen(3000, () => {
  console.log("server is up");
});
