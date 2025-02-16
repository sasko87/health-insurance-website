const nodemailer = require("nodemailer");
require("dotenv").config();
const { MAIL_USER, MAIL_PASS, MAIL_HOST } = process.env;

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

module.exports = { transporter };
